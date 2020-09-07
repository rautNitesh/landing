import React from "react";

import styled from "styled-components";

const StyledImage = styled.img``;

const Image = (props) => {
  return <StyledImage src={props.source} />;
};

export default Image;
