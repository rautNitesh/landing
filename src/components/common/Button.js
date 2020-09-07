import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 2rem;
  background: orange;
  outline: none;
  border: none;
  border-radius: 5px;
`;

const Button = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
