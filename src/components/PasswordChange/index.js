import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';
    return (
      <form onSubmit={this.onSubmit} className="formcontainer">
        <div className="form__group field">
          <input type="input"
          className="form__field"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
          required />
          <label for="name" className="form__label">New Password</label>
        </div>
        <div className="form__group field">
          <input type="input"
          className="form__field"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
          required />
          <label for="name" className="form__label">Confirm New Password</label>
        </div>
        <button disabled={isInvalid} className="button__form__submit" type="submit">Reset My Password</button>
      <div className="error__div">{error && <p className="error__div__text">{error.message}</p>}</div>
      </form>
    );
  }
}
export default withFirebase(PasswordChangeForm);
