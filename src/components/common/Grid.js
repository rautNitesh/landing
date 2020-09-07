import React from "react";

import styled from "styled-components";

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 50px;
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: auto;
`;

const Grid = ({ children, ...rest }) => {
  return <StyledGrid {...rest}>{children}</StyledGrid>;
};

export default Grid;
