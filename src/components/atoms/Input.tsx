import React from "react";
interface Props {
  label: string;
  placeHolder: string;
  type: string;
  height: string;
}
const input = (props: Props) => {
  return (
    <div className="flex flex-col w-full">
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeHolder}
        aria-label="hhhh"
        color="black"
        style={{
          width: "60%",
          border: "solid 2px black",
          borderRadius: "10px",
          height: props.height,
          color: "black",
          verticalAlign: "top",
        }}
      />
    </div>
  );
};

export default input;
