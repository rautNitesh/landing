import React from "react";

import styled from "styled-components";

const StyledContainer = styled.section`
  width: 80%;
  margin: auto;
`;

const Container = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
