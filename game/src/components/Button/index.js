import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  color: #961737;
  width: 18rem;
  height: 6rem;
  border-radius: 1rem;
  border: #ff3d6e 2px solid;

  cursor: pointer;
  background: pink;

  &:hover {
    background: #fc799a;
  }
  &:active {
    background: #ff3d6e;
  }
`;

const Button = (props) => {
  return <StyledButton onClick={props.click}>{props.text}</StyledButton>;
};

export default Button;

/*
width: 18rem;
height: 6rem;
border-radius: 1rem;
border: #ff3d6e 2px solid;

cursor: pointer;
background: pink;

&:hover {
  background: #fc799a;
}

*/
