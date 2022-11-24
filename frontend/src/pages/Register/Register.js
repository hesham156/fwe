import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "../../asset/css/register.module.css";
import Uploading from "../../component/Uploading";
import { productsContext } from "../../context/datacontext";
const Register = () => {
  const { users, getUsers, setUser } = useContext(productsContext);
  const nave = useNavigate();
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const register = () => {
    if (name && pass && email) {
      if (users.filter((user) => user.email === email).length > 0) {
        toast.error(`${email} already registered`);
      } else {
        setUser(name, email, pass, users.length + 2);
        toast.success(`${email} registered successfully`);

        nave("/login", { replace: true });
      }
    } else {
      toast.error("Please enter all required fields");
    }
  };
  return (
    <div className={style.register + " reg center w-100 vh-100"}>
      <div
        className={
          style.regForm +
          " center form flex-direction-column justify-content-start "
        }
      >
        <div className={style.reg_head + " w-100 center"}>
          <h2>Register</h2>
        </div>
        <div className={style.reg_logo + " center flex-direction-column w-100"}>
          <h2>F W E</h2>
          <h3>
            <span>F</span>riend <span>W</span>ithout <span>E</span>nd
          </h3>
        </div>
        <div
          className={style.reg_input + " w-100 center flex-direction-column"}
        >
          <Uploading
            types={["text", "email", "password"]}
            placeholders={["name", "email", "password"]}
            action={() => {
              register();
            }}
            btnvalue="Register"
            setvalue={[setName, setEmail, setPass]}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
