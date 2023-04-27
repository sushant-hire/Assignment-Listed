import React from "react";

function CustomButton(props) {
  return (
      <button className={props.className} id={props.id} onClick={props.onClick}>
        {props.icon}&nbsp; &nbsp;{props.text}
      </button>
  );
}

export default CustomButton;
