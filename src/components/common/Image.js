import React from "react";

import styled from "styled-components";

const StyledImage = styled.img`
  margin-top: ${(props) => (props.marginTop ? props.marginTop : null)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : null)};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : null)};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : null)};
  width: ${(props) => (props.width ? props.width : "auto")};
  cursor: ${(props) => (props.cursor ? props.cursor : null)};

  @media screen and (max-width: 720px) {
    width: ${(props) => (props.mobileWidth ? props.mobileWidth : "auto")};
    margin-top: ${(props) =>
      props.marginMobileTop ? props.marginMobileTop : "auto"};
    margin-bottom: ${(props) =>
      props.marginMobileBottom ? props.marginMobileBottom : "auto"};
    margin-left: ${(props) =>
      props.marginMobileLeft ? props.marginMobileLeft : "auto"};
    margin-right: ${(props) =>
      props.marginMobileRight ? props.marginMobileRight : "auto"};
  }
`;

const Image = ({ source, ...rest }) => {
  return <StyledImage {...rest} src={source} />;
};

export default Image;
