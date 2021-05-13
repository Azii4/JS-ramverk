import React from "react";
import deleteIcon from "./images/delete.png";
import starIcon from "./images/star.png";

export default function Movie(props) {
  console.log(props.item.grade);

  function getStars(rating) {
      i = 
    for (let i = 0; range({props.item.grade})){

    }
    return (<img src={starIcon} alt="star" />).repeat(rating);
  }

  return (
    <li>
      {props.item.title}
      {props.item.grade}
      {getStars(props.item.grade)}
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
