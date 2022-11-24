import React from "react";
import { Button, Input } from "./Elements";

const Uploading = ({ types, placeholders, setvalue, action, btnvalue }) => {
  const setValue = () => {
    let input = document.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++) {
      input[i].value = "";
    }
  };
  return (
    <>
      <div className="w-100 center">
        <div className="w-50 center flex-direction-column">
          {placeholders?.map((placeholder) => {
            return (
              <div key={placeholders.indexOf(placeholder)}>
                <Input
                  type={types[placeholders.indexOf(placeholder)]}
                  placeholder={placeholder}
                  onChange={(e) => {
                    setvalue[placeholders.indexOf(placeholder)](
                      placeholder === "image"
                        ? URL.createObjectURL(e.target.files[0])
                        : e.target.value
                    );
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Button
        value={btnvalue}
        clas="primary"
        action={() => {
          action();
          setValue();
        }}
      />
    </>
  );
};

export default Uploading;
