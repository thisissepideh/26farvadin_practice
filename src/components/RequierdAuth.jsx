import React, { useContext } from "react";
import checkLogin from "../context/checkLogin";
import { useLocation, Navigate } from "react-router-dom";

const Requierdauth = ({ children }) => {
  const { userLogin, setUserLogin } = useContext(checkLogin);
  const location = useLocation();

  if (!userLogin) {
    alert("Please Login!");
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  return <div>{children}</div>;
};

export default Requierdauth;
