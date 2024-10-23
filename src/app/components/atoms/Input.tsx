import React from "react";
interface Props {
  type: string;
  placeHolder: string;
  label: string;
  height: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const Input = (props: Props) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <label className="md:text-md text-xs">{props.label}</label>
        <input
          className="text-sm md:text-md"
          type={props.type}
          placeholder={props.placeHolder}
          aria-label="hhhh"
          color="black"
          style={{
            width: "100%",
            borderRadius: "10px",
            height: props.height,
            color: "black",
            verticalAlign: "top",
            outline: "0px",
            padding: "8px",
          }}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
};

export default Input;
