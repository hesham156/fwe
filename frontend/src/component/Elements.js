import { useState } from "react";
import style from "../asset/css/elemnts.module.css";
export const Button = ({ value, action, clas }) => {
  return (
    <button
      className={(clas ? style[clas] : "") + " " + style["btn"]}
      onClick={(e) => {
        action(e);
      }}
    >
      {value}
    </button>
  );
};
export const Input = ({
  type,
  placeholder,
  onChange,
  value,
  action,
  disabled,
}) => {
  const [img, setImg] = useState();
  const myImg = img?.split(",");
  return (
    <div className={style.input + " center flex-direction-column"}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e);
          placeholder === "image"
            ? setImg(img + "," + URL.createObjectURL(e?.target.files[0]))
            : console.log(false);
        }}
        disabled={disabled}
        style={{ border: !disabled && value ? "1px solid black" : "none" }}
      />
      <div>
        {type === "file"
          ? myImg?.map((i) => {
              return <>{i !== "undefined" ? <img src={i} /> : ""}</>;
            })
          : ""}
      </div>
      {value ? (
        <Button
          value={value}
          action={() => {
            action();
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};
