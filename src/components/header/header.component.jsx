import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.style.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link
      className="logo-container"
      to="https://madnanabbas.github.io/crown-clothing-p/"
    >
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link
        className="option"
        to="https://madnanabbas.github.io/crown-clothing-p/shop"
      >
        SHOP
      </Link>
      <Link
        className="option"
        to="https://madnanabbas.github.io/crown-clothing-p/contact"
      >
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link
          className="option"
          to="https://madnanabbas.github.io/crown-clothing-p/signin"
        >
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
