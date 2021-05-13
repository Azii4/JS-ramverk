import React from "react";
import deleteIcon from "./images/delete.png";
import starIcon from "./images/star.png";

const getStars = (rating) => {
  return Array(rating)
    .fill(0)
    .map((_, i) => <img key={i} src={starIcon} alt="star" />);
};

export default function Movie(props) {
  return (
    <li>
      {props.item.title}
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
