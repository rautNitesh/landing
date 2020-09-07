import React from "react";

import styled from "styled-components";

const StyledContainer = styled.section`
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: auto;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : null)};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : null};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : null)};
  padding-right: ${(props) =>
    props.paddingRight ? props.paddingTRight : null};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : null};
  @media screen and (max-width: 720px) {
    padding-top: ${(props) =>
      props.paddingMobileTop ? props.paddingMobileTop : null};
    padding-bottom: ${(props) =>
      props.paddingMobileBottom ? props.paddingMobileBottom : null};
    padding-left: ${(props) =>
      props.paddingMobileLeft ? props.paddingMobileLeft : null};
    padding-right: ${(props) =>
      props.paddingMobileRight ? props.paddingMobileRight : null};
    width: ${(props) => (props.mobileWidth ? props.mobileWidth : "auto")};
  }
`;

const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default Container;
