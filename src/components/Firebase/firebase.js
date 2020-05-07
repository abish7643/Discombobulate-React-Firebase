import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database'
import 'firebase/functions'
import 'firebase/analytics'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: "G-V3V0XCYG26",
};

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.fieldValue = app.firestore.FieldValue;

      this.timeStampRealDb = app.database.ServerValue;
      
      this.auth = app.auth();
      this.db = app.firestore();
      this.realDb = app.database();
      this.functions = app.functions();
      this.analytics = app.analytics();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password)

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email =>
      this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);

    onAuthUserListener = (next, fallback) =>
      this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .get()
          .then(snapshot => {
            const dbUser = snapshot.data();
 
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };
 
            next(authUser);
          });
      } else {
        fallback();
      }
    });

    createdAt = () => {
      return this.fieldValue.serverTimestamp()
    }

    createdAtReadDb = () => {
      return this.timeStampRealDb.TIMESTAMP
    }

    checkAnswer = () => {
      return this.functions.httpsCallable('checkAnswer');
    }
    
    user = uid => this.db.doc(`users/${uid}`);
    users = () => this.db.collection('users');


    userRealDb = uid => this.realDb.ref(`users/${uid}`)
    usersRealDb = () => this.realDb.ref('users')

    question = questionID => this.db.doc(`questions/${questionID}`);
    questions = () => this.db.collection(`questions`);

  }

  export default Firebase;
