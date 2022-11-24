import React, { useContext, useEffect, useState } from "react";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "../../component/Elements";
import { productsContext } from "../../context/datacontext";
import { toast } from "react-toastify";

const UserInfo = () => {
  const [edit, setedit] = useState();
  const [email, setemail] = useState();
  const [address, setaddress] = useState();
  const [phone, setphone] = useState();
  const [disabled, setdisabled] = useState(true);
  const localuser = JSON.parse(localStorage.getItem("user"));
  const { updateUser, getUserById, user } = useContext(productsContext);

  useEffect(() => {
    getUserById(localuser.id);
    if (email || address || phone) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  }, [email, address, phone]);
  const update = (e) => {
    updateUser(user[0]?.id, {
      email: email ? email : user[0]?.email,
      city: address ? address : user[0]?.city,
      phone: phone ? phone : user[0]?.phone,
    });
    toast.success("Data Updated Success");
    localStorage.setItem("user", JSON.stringify(user[0]));
  };
  return (
    <>
      <div className="center flex-direction-column">
        <img src="https://www.calc-online.xyz/assets/images/users/user.png" />
        <h2> {user[0]?.name}</h2>
      </div>
      <Input
        type="email"
        placeholder={user[0]?.email}
        value={<FontAwesomeIcon icon={faPenToSquare} />}
        onChange={(e) => {
          setemail(e.target.value);
        }}
        action={() => {
          setedit("email");
        }}
        disabled={edit === "email" ? false : true}
      />
      <Input
        type="tel"
        placeholder={user[0]?.phone}
        value={<FontAwesomeIcon icon={faPenToSquare} />}
        onChange={(e) => {
          setphone(e.target.value);
        }}
        action={() => {
          setedit("phone");
        }}
        disabled={edit === "phone" ? false : true}
      />
      <Input
        type="text"
        placeholder={user[0]?.city}
        value={<FontAwesomeIcon icon={faPenToSquare} />}
        onChange={(e) => {
          setaddress(e.target.value);
        }}
        action={() => {
          setedit("addres");
        }}
        disabled={edit === "addres" ? false : true}
      />

      {disabled ? (
        ""
      ) : (
        <div className="update">
          <Button clas="primary" action={(e) => update(e)} value="update" />
        </div>
      )}
    </>
  );
};

export default UserInfo;
