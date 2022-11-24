import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
const GlobalNave = () => {
  return (
    <div className="global-nave w-100 center">
      <div className="container w-100 center">
        <div className="w-50 center">
          <h2>FWE</h2>
        </div>
        <div className="w-50 center">
          <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
    </div>
  );
};

export default GlobalNave;
