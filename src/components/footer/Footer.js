import React from "react";

import Policy from "./Policy";
import Grid from "../common/Grid";
import LogoInfo from "./LogoInfo";
import styled from "styled-components";
import CustomerService from "./CustomerService";
import ContactInformation from "./ContactInformation";

const StyledFooter = styled.footer`
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : null)};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : null};
  color: black;
`;

const Footer = () => {
  return (
    <StyledFooter paddingTop="10rem" paddingBottom="5rem">
      <Grid width="80%" margin="0 13rem">
        <LogoInfo />
        <CustomerService />
        <ContactInformation />
      </Grid>
      <Policy />
    </StyledFooter>
  );
};

export default Footer;
