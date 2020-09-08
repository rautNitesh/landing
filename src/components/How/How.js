import React from "react";

import Text from "../common/Text";
import Grid from "../common/Grid";
import Image from "../common/Image";
import styled from "styled-components";
import FlexBox from "../common/FlexBox";
import Container from "../common/Container";
import fresh from "../../assets/images/photos/fresh.png";
import delivery from "../../assets/images/photos/delivery.png";
import customize from "../../assets/images/photos/customize.png";

const StyledHow = styled.section`
  text-align: ${(props) => (props.textAlign ? props.textAlign : null)};
`;

const How = (props) => {
  return (
    <StyledHow textAlign="center">
      <Container
        width="70%"
        mobileWidth="100%"
        paddingTop="5rem"
        paddingBottom="8rem"
      >
        <Text fontSize="25px" color="#373f53" fontWeight="700">
          How it works
        </Text>
        <Container paddingTop="5rem">
          <Grid width="80%">
            <FlexBox justify="center" width="80%" direction="column">
              <Image source={customize} width="100%" mobileWidth="70%" />
              <Text
                marginTop="1rem"
                fontSize="15px"
                fontMobileSize="20px"
                color="#60646e"
              >
                Order from our macro based and completely customisable menu
              </Text>
            </FlexBox>
            <FlexBox justify="center" width="90%" direction="column">
              <Image source={fresh} width="90%" mobileWidth="70%" />
              <Text
                marginTop="1rem"
                fontMobileSize="20px"
                fontSize="15px"
                color="#60646e"
              >
                Your fresh meals are prepared by our chefs
              </Text>
            </FlexBox>
            <FlexBox justify="center" width="80%" direction="column">
              <Image
                marginLeft="auto"
                source={delivery}
                width="110%"
                mobileWidth="70%"
              />
              <Text
                marginTop="1rem"
                fontMobileSize="20px"
                fontSize="15px"
                color="#60646e"
              >
                Order from our macro based and completely customisable menu
              </Text>
            </FlexBox>
          </Grid>
        </Container>
      </Container>
    </StyledHow>
  );
};

export default How;
