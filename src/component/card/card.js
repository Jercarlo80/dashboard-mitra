import React from "react";

export default function Card(props) {
  return (
    <aside className="w-[77rem] h-[51.563rem] bg-white mt-[1.5rem] rounded-xl shadow-2xl">
        <h1 className="text-[2rem] pl-[1.875rem] pt-[2.125rem] font-semibold">{props.tag}</h1>
    </aside>
  );
}
