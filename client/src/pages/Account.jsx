import React from "react";
import { CreateAccount } from "./CreateAccount";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="flexcontainer">
        <p className="text">
          <span className="span">
            Email:
            <br />
          </span>
        </p>
        <p className="text">
          <span className="span">Username:</span>
        </p>
      </div>
      <div className="create-account-wrapper">
        <CreateAccount createAccoutButton="Create Account" />
      </div>
    </div>
  );
};