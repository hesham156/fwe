import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "../../asset/css/login.module.css";
import Uploading from "../../component/Uploading";
import { productsContext } from "../../context/datacontext";

const Login = () => {
  const { users } = useContext(productsContext);
  const nave = useNavigate();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const login = () => {
    const user = users?.filter((u) => {
      return u?.email === email && u?.password === pass;
    });
    if (user.length === 1) {
      if (email && pass) {
        if (user[0].password != pass) {
          toast.error("error in username or password");
        } else {
          localStorage.setItem("user", JSON.stringify(user[0]));
          toast.success("login successfully");
          nave("/", { replace: true });
        }
      } else {
        toast.error("Please enter a username and password");
      }
    } else {
      toast.error("error in username or password" + user.length);
    }
  };
  return (
    <div
      className={
        style.login + " login w-100 vh-100 center flex-direction-column "
      }
    >
      <div
        className={
          style.login_form +
          " center form flex-direction-column justify-content-start"
        }
      >
        <div className={style.login_head + " w-100 center"}>
          <h2>Login</h2>
        </div>
        <div
          className={style.login_logo + " center flex-direction-column w-100"}
        >
          <h2>F W E</h2>
          <h3>
            <span>F</span>riend <span>W</span>ithout <span>E</span>nd
          </h3>
        </div>
        <div
          className={style.login_input + " w-100 center flex-direction-column"}
        >
          <Uploading
            types={["email", "password"]}
            placeholders={["email", "password"]}
            setvalue={[setEmail, setPass]}
            btnvalue="Login"
            action={() => {
              login();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
