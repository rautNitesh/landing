import React from "react";
import styled from "styled-components";

import Nav from "./Nav";
import Container from "../common/Container";

const StyledHeader = styled.header`
  padding: 1rem;
  background-color: #f1f0f7;
`;

const Header = () => {
  return (
    <Container width="70%">
      <StyledHeader>
        <Nav />
      </StyledHeader>
    </Container>
  );
};

export default Header;
