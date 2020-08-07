import React, { Component } from "react";
import { withFirebase } from "../Firebase";

// import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
  loading: false,
  initiated: false,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    this.setState({ loading: true });
    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
        this.setState({ loading: false });
      });
    this.setState({ initiated: true });

    event.preventDefault();
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { passwordOne, passwordTwo, error, loading } = this.state;
    // let message = "";
    // if (!error && initiated) {
    //   message = "Password Updated";
    // }
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    return (
      <form onSubmit={this.onSubmit} className="formcontainer">
        <div className="form__group field">
          <input
            className="form__field"
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="New Password"
            required
          />
          <label htmlFor="name" className="form__label">
            New Password
          </label>
        </div>
        <div className="form__group field">
          <input
            className="form__field"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm New Password"
            required
          />
          <label htmlFor="name" className="form__label">
            Confirm New Password
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
        <div
          className="error muted__text"
          style={{ width: "100%", maxWidth: "350px", textAlign: "center" }}
        >
          {error && <p className="error__div__text">{error.message}</p>}
        </div>
      </form>
    );
  }
}
export default withFirebase(PasswordChangeForm);
