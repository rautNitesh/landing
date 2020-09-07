import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 2rem;
  background: ${(props) => (props.color === "primary" ? "#f69447" : "red")};
  outline: none;
  border: none;
  border-radius: 5px;
  font: 15px "Montserrat", san-serif;
  font-weight: 500;
  color: ${(props) => (props.color === "primary" ? "white" : "black")};
  @media (max-width: 720px) {
    padding: 0.5rem 1rem;
    font-size: 15px;
  }
`;

const Button = (props) => {
  return <StyledButton color={props.color}>{props.children}</StyledButton>;
};

export default Button;
