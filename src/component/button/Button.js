import React from "react";

export default function Button(props) {
  return (
    <button
      className={`${props.bgColor} ${props.size} rounded-xl shadow-white bg-transparent hover:shadow-xl`}
    //   onClick={() => props.onClick()}
    >
      <h1
        className={`${props.txtColor}
        ${props.txtSize}
        ${props.position}
        font-extralight
        hover:font-bold
        
        rounded-xl
        text-[1rem]`}
      >
        {props.icon}
        {props.text}
      </h1>
    </button>
  );
}
