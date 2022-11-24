import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Spiner = () => {
  return (
    <div className="w-100 h-100 center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#5c00f1"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Spiner;
