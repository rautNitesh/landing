import React from "react";
import styled from "styled-components";

import Text from "../common/Text";
import Image from "../common/Image";
import Button from "../common/Button";
import Margin from "../common/Margin";
import FlexBox from "../common/FlexBox";
import Container from "../common/Container";
import Logo from "../../assets/images/icons/logo.png";

const Line = styled.div`
  margin: 0 1rem;
  border-right: 1px solid #f69447;
  height: 100%;
`;

const Nav = () => {
  return (
    <FlexBox width="100%" justify="space-between">
      <FlexBox margin="0">
        <Container>
          <Image mobileWidth="50%" source={Logo} alt="Logo" />
        </Container>
        <Line />
        <FlexBox direction="column">
          <Text
            color="#f69447"
            fontMobileSize="15px"
            letterMobileSpacing="0.5"
            fontWeight="300"
            letterSpacing="3px"
          >
            Wholesale
          </Text>
          <Text
            color="#f69447"
            fontWeight="400"
            textTransform="uppercase"
            letterSpacing="6px"
            marginTop="5px"
            fontMobileSize="15px"
            letterMobileSpacing="0.5"
          >
            Portal
          </Text>
        </FlexBox>
      </FlexBox>
      <Margin marginTop="5px">
        <Button color="primary">Login</Button>
      </Margin>
    </FlexBox>
  );
};
export default Nav;
