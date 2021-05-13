import React from "react";
import deleteIcon from "./images/delete.png";
import starIcon from "./images/star.png";

export default function Movie(props) {
  console.log(props.item.grade);

  return (
    <li>
      {props.item.title}
      {props.item.grade}
      <img
        src={deleteIcon}
        alt="X"
        className="float-end"
        onClick={() => {
          props.deleteItem(props.item.id);
        }}
      ></img>
    </li>
  );
}
