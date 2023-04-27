import React from "react";

function CustomInput(props) {
  return (
    <div>
      <input
        className={props.className}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default CustomInput;
