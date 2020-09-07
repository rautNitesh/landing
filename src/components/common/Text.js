import React from "react";

import styled from "styled-components";

const StyledText = styled.text`
  color: ${(props) => (props.color ? props.color : "white")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : null};
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : null};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : null)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : null)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : null)};

  @media (max-width: 720px) {
    margin-top: ${(props) =>
      props.marginMobileTop ? props.marginMobileTop : null};
    margin-bottom: ${(props) =>
      props.marginMobileBottom ? props.marginMobileBottom : null};
    font-size: ${(props) =>
      props.fontMobileSize ? props.fontMobileSize : "20px"};
    letter-spacing: ${(props) =>
      props.letterMobileSpacing ? props.letterMobileSpacing : null};
  }
`;

const Text = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export default Text;
