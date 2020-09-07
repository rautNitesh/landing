import React from "react";
import styled from "styled-components";

import Nav from "./Nav";
import StyledContainer from "../common/Container";

const StyledHeader = styled.header`
  padding-top: 2em;
`;

const Header = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <Nav />
      </StyledHeader>
    </StyledContainer>
  );
};

export default Header;
