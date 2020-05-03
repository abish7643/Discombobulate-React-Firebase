import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './signup.scss'

import {css} from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const SignUpPage = () => (
  <div className="container">
    <h1>GET STARTED <span className="highlighted__text">RIGHT AWAY</span></h1>
    <SignUpForm/>
    <SignInLink/>
  </div>
);


const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  loading: false,

};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }


  onSubmit = event => {
    this.setState({ loading: true });
    const { username, email, passwordOne } = this.state;
    const challengesCompleted = 0;
    const adminRole = 0;
    const lastCorrectAnswerAt = this.props.firebase.createdAt();
    const AccountCreatedAt = this.props.firebase.createdAt();
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firestore
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            AccountCreatedAt,
            adminRole,
            challengesCompleted,
            lastCorrectAnswerAt,
          },
          { merge: true },
          );
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
        this.setState({ loading: false });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      loading
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit} className="formcontainer">

        <div className="form__group field">
          <input type="input"
          className="form__field"
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
          required />
          <label for="name" className="form__label">Username</label>
        </div>
        <div className="form__group field">
          <input type="input"
          className="form__field"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          required />
          <label for="name" className="form__label">Email Address</label>
        </div>
        <div className="form__group field">
          <input type="input"
          className="form__field"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          required />
          <label for="name" className="form__label">Password</label>
        </div>
        <div className="form__group field">
          <input type="input"
          className="form__field"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
          required />
          <label for="name" className="form__label">Confirm Password</label>
        </div>
        <button disabled={isInvalid} className="button__form__submit" type="submit">Sign Up <ClipLoader size={8} color={'#4CB8A4'} loading={loading}/></button>
        {error && <p className="error__text">{error.message}</p>}
      </form>
    );
  }
}
const SignInLink = () => (
  <p className="form__bottom__links">
    Already have an account?  <Link to={ROUTES.SIGN_IN} className="link__decoration">
    <span className="highlighted__text">SIGN IN</span></Link>
  </p>
);
const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);
export default SignUpPage;
export { SignUpForm, SignInLink };
