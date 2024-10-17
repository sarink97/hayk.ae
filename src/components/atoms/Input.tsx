import React from "react";
interface Props {
  type: string;
  placeHolder: string;
  label: string;
  height: string;
  value : string;
  onChange : React.ChangeEventHandler<HTMLInputElement>
}
const Input = (props: Props) => {
  return (
    <>
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
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
};

export default Input;
