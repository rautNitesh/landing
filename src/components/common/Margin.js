import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: ${(props) => (props.marginTop ? props.marginTop : null)};
`;

const Margin = ({ children, ...rest }) => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default Margin;
