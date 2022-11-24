import React, { useState } from "react";
import { Button } from "./Elements";

const Option = ({ options, setvalue, imgs, icons }) => {
  const [index, setIndex] = useState(0);
  const [select, setselect] = useState(false);
  return (
    <>
      <div
        style={{ height: select ? (options.length + 1) * 55 + "px" : "55px" }}
        className={(select ? "option-select" : "") + " options"}
      >
        <Button
          action={() => {
            select ? setselect(false) : setselect(true);
          }}
          value={options[index]}
        />

        {options.map((option) => {
          return (
            <button
              key={options.indexOf(option)}
              onClick={() => {
                setIndex(options.indexOf(option));
                select ? setselect(false) : setselect(true);
                setvalue(option);
              }}
            >
              {option}
              {imgs ? (
                <img
                  src={"http://localhost:3000/" + imgs[options.indexOf(option)]}
                  alt="icon"
                />
              ) : (
                icons[options.indexOf(option)]
              )}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Option;
