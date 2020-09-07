import React from "react";
import Text from "../common/Text";
import Image from "../common/Image";
import styled from "styled-components";
import FlexBox from "../common/FlexBox";
import Container from "../common/Container";
import steak from "../../assets/images/photos/steak.png";

const StyledContact = styled.section`
  background: #352b6f;
  height: ${(props) => (props.height ? props.height : "auto")};
  @media screen and (max-width: 720px) {
    height: ${(props) => (props.mobileHeight ? props.mobileHeight : "auto")};
  }
`;

const Contact = () => {
  return (
    <StyledContact height="450px" mobileHeight="400px">
      <FlexBox margin="auto" mobileWidth="80%" width="90%" direction="column">
        <Container
          margin="auto"
          width="50%"
          paddingTop="7rem"
          paddingMobileTop="3rem"
          direction="column"
        >
          <Container>
            <Text
              fontSize="30px"
              fontMobileSize="20px"
              color="#fff"
              fontWeight="700"
            >
              Food 4 Fitness is developed to inspire health and fitness.
            </Text>
          </Container>
          <Container margin="2em 0 0 0">
            <Text
              fontSize="15px"
              fontMobileSize="10px"
              color="#9e99ba"
              marginTop="1rem"
              marginMobileTop="rem"
              fontWeight="400"
            >
              Designed and prepared by our professional chefs, in cosultation
              with our dietians, F4F meals make eating healthy, effortless and
              satisfying.
            </Text>
          </Container>
          <Container margin="2em 0 0 0">
            <Text
              fontSize="13px"
              fontMobileSize="13px"
              color="#fff"
              marginTop="1em"
              fontWeight="500"
            >
              Prefer call directly to an expert? Give us call on:
            </Text>
          </Container>
          <Text
            fontMobileSize="10px"
            fontSize="13px"
            color="#fff"
            marginTop="1em"
            fontWeight="500"
          >
            Phone:{" "}
            <Text
              color="#f69447"
              marginMobileTop="0.5rem"
              fontMobileSize="10px"
              fontSize="15px"
            >
              1300 MACROS (1300 622 767)
            </Text>
          </Text>
        </Container>
        <Container width="40%">
          <Image
            source={steak}
            width="60%"
            mobileWidth="150px"
            marginLeft="-75rem"
            marginMobileLeft="-22rem"
            marginTop="-5rem"
            marginMobileTop="1rem"
          />
        </Container>
      </FlexBox>
    </StyledContact>
  );
};

export default Contact;
