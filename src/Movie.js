import React from "react";
import styled from "styled-components";

import deleteIcon from "./images/delete.png";
import starIcon from "./images/star.png";

const ICONSIZE = 24;

const StyledMovie = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const StyledTitle = styled.div`
  flex-grow: 1;
`;

const StyledStars = styled.div`
  width: ${ICONSIZE * 5}px;
  text-align: right;
`;

const StyledStarImage = styled.img`
  width: ${ICONSIZE}px;
  height: ${ICONSIZE}px;
`;

const StyledDeleteImage = styled.img`
  margin-left: 10px;
  width: ${ICONSIZE}px;
  height: ${ICONSIZE}px;
  cursor: pointer;
`;

const getStars = (rating) => {
  return Array(rating)
    .fill(0)
    .map((_, i) => <StyledStarImage key={i} src={starIcon} alt="star" />);
};

const Movie = (props) => {
  return (
    <StyledMovie>
      <StyledTitle>{props.item.title}</StyledTitle>
      <StyledStars>{getStars(props.item.grade)}</StyledStars>
      <StyledDeleteImage
        src={deleteIcon}
        alt="X"
        onClick={() => {
          props.deleteItem(props.item.id);
        }}
      />
    </StyledMovie>
  );
};

export default Movie;
