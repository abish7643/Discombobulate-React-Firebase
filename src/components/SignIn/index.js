import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import { PasswordForgetLink } from '../PasswordForget';

const SignInPage = () => (
  <div className="container">
    <h1>GET RIGHT INTO <span className="highlighted__text">ACTION</span></h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form onSubmit={this.onSubmit} className="formcontainer">
        <div class="form__group field">
          <input type="input"
          class="form__field"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          required />
          <label for="name" class="form__label">Email Address</label>
        </div>
        <div class="form__group field">
          <input type="input"
          class="form__field"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          required />
        <label for="name" class="form__label">Password</label>
        </div>
        <button disabled={isInvalid} className="button__form__submit" type="submit">Sign In</button>
        <div className="error__div">{error && <p className="error__div__text">{error.message}</p>}</div>
      </form>
    );
  }
}

const SignUpLink = () => (
  <p className="form__bottom__links">
    Don't have an Account? <Link to={ROUTES.SIGN_UP} className="link__decoration">
    <span className="highlighted__text">Sign Up</span></Link>
  </p>
);

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm, SignUpLink };
