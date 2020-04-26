import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';


const PasswordForgetPage = () => (
  <div className="container">
    <h1>Rejenuvate Your <span className="highlighted__text">Password</span></h1>
    <PasswordForgetForm />
  </div>
);


const INITIAL_STATE = {
  email: '',
  error: null,
};
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <form onSubmit={this.onSubmit} className="formcontainer">
        <div class="form__group field">
          <input type="input"
          class="form__field"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          required />
          <label for="name" class="form__label">Email Address</label>
        </div>

        <button disabled={isInvalid} className="button__form__submit" type="submit">Reset My Password</button>
      <div className="error__div">{error && <p className="error__div__text">{error.message}</p>}</div>
      </form>
    );
  }
}
const PasswordForgetLink = () => (
  <p className="form__bottom__links">
    Hard to Remember? <Link to={ROUTES.PASSWORD_FORGET} className="link__decoration">
    <span className="highlighted__text">Forgot Password</span></Link>
  </p>
);
export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };
