import React from "react";

export default function Button(props) {
  return (
    <button
      className={`${props.bgColor} ${props.size} rounded-xl shadow-none bg-transparent hover:shadow-xl`}
    //   onClick={() => props.onClick()}
    >
    {/* <div className={`${props.style}`}>{props.icon}</div>     */}
      <h1
        className={`${props.txtColor}
        ${props.txtSize}
        ${props.position}
        font-bold
        shadow-md
        text-[1rem]`}
      >
     
        {props.icon}
      
        {props.text}
      </h1>
    </button>
  );
}
