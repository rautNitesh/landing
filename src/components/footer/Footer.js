import React from "react";

import Grid from "../common/Grid";
import styled from "styled-components";

import LogoInfo from "./LogoInfo";
import CustomerService from "./CustomerService";
import ContactInformation from "./ContactInformation";

const StyledFooter = styled.footer`
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : null)};
  color: black;
`;

const Footer = () => {
  return (
    <StyledFooter paddingTop="10rem">
      <Grid width="80%" margin="0 13rem">
        <LogoInfo />
        <CustomerService />
        <ContactInformation />
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
