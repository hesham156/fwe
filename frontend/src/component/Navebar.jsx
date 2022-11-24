import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faHouse,
  faHeart,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Select from "./Select";
const Navebar = () => {
  let icons = [
    <FontAwesomeIcon icon={faHouse} />,
    <FontAwesomeIcon icon={faHeart} />,
    <FontAwesomeIcon icon={faBasketShopping} />,
    <FontAwesomeIcon icon={faUser} />,
    <FontAwesomeIcon icon={faRightFromBracket} />,
  ];
  let link = ["/Cats", "/loves", "/card", "/user/profile", "/logout"];

  return (
    <div className="navebar">
      <ul className="w-100 h-100 center">
        <Select
          livalue={icons}
          urllist={link}
          active="active-li"
          id="navli"
          liclass="navli"
        />
      </ul>
    </div>
  );
};

export default Navebar;
