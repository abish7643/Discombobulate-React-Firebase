import React from "react";
import { withFirebase } from "../Firebase";
import { Link } from "react-router-dom";

const SignOutButton = ({ firebase }) => (
  <Link
    className="navigationbar__inner__right__link"
    to="/signin"
    onClick={firebase.doSignOut}
  >
    Logout
  </Link>
);
export default withFirebase(SignOutButton);
