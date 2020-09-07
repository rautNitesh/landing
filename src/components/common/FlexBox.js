import React from "react";

import styled from "styled-components";

const StyledFlexBox = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.direction ? "column" : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : null)};
  text-align: center;
  width: ${(props) => (props.width ? props.width : "auto")};
  @media screen and (max-width: 720px) {
    width: ${(props) => (props.mobileWidth ? props.mobileWidth : "auto")};
  }
`;

const FlexBox = ({ children, ...rest }) => {
  return <StyledFlexBox {...rest}>{children}</StyledFlexBox>;
};
export default FlexBox;
