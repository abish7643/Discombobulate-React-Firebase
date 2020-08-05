import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

// import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const PasswordForgetPage = () => (
  <div className="container">
    <h1>
      Rejenuvate Your <span className="highlighted__text">Password</span>
    </h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null,
  loading: false,
};
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    this.setState({ loading: true });
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
        this.setState({ loading: false });
      });
    event.preventDefault();
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, error, loading } = this.state;
    const isInvalid = email === "";
    return (
      <form onSubmit={this.onSubmit} className="formcontainer">
        <div className="form__group field">
          <input
            className="form__field"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
            required
          />
          <label for="name" class="form__label">
            Email Address
          </label>
        </div>

        <button
          disabled={isInvalid}
          className="button__form__submit"
          type="submit"
        >
          Reset My Password{" "}
          <ClipLoader size={8} color={"#4CB8A4"} loading={loading} />
        </button>
        <div className="error">
          {error && <p className="error__text">{error.message}</p>}
        </div>
      </form>
    );
  }
}
const PasswordForgetLink = () => (
  <p className="form__bottom__links muted__text smaller__text">
    Hard to Remember?{" "}
    <Link to={ROUTES.PASSWORD_FORGET} className="link__decoration">
      <span className="highlighted__text">Forgot Password</span>
    </Link>
  </p>
);
export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };
