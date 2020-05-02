const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const FieldValue = require('firebase-admin').firestore.FieldValue;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.checkAnswer = functions.https.onCall((data, context)=>{
        //Constants From CLient
        const answerAttempted = data.answerQuestionUserData.attemptedAnswer.toLowerCase();
        const validateQuestion = data.answerQuestionUserData.questionNumber;
        const nextQuestionIfCorrect = validateQuestion;
        const validateQuestionString = validateQuestion.toString();
        const userID = context.auth.uid;

        //Get Corresponding Answer
        return admin.firestore().collection('answers').doc(validateQuestionString)
        .get().then(function(doc){
            if (doc.exists) {
                let actualAnswer = doc.data().answer.toLowerCase();
                //Validation and Returning Corresponding Strings
                if (actualAnswer === answerAttempted){
                    admin.firestore().collection('users').doc(userID)
                    .update({
                        challengesCompleted: nextQuestionIfCorrect,
                        lastCorrectAnswerAt: FieldValue.serverTimestamp()
                    })
                    return `Correct Answer`;
                } else {
                    return `Wrong Answer`;
                }

            } else {
                return `No Such Answer`;
            }

        }).catch(function(error){ //Return Error
            return `Error Getting Answer`;
        });
})
