import React from "react";
import styled from "styled-components";

import Button from "../common/Button";
import Logo from "../../assets/images/icons/logo.png";
import Image from "../common/Image";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;

const Nav = () => {
  return (
    <StyledNav>
      <div className="Nav__logo-container">
        <Image source={Logo} alt="Logo" />
      </div>
      <div className="Nav__button-container">
        <Button color="primary">Login</Button>
      </div>
    </StyledNav>
  );
};
export default Nav;
