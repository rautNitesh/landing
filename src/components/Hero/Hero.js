import React from "react";

import styled from "styled-components";

import Text from "../common/Text";
import Image from "../common/Image";
import Button from "../common/Button";
import FlexBox from "../common/FlexBox";
import Container from "../common/Container";
import smallPlate from "../../assets/images/photos/smallPlate.png";
import largePlate from "../../assets/images/photos/whitePlate.png";

const StyledHero = styled.section`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : null};
  /* padding-bottom: 8em; */
  height: ${(props) => (props.height ? props.height : "auto")};

  @media screen and (max-width: 720px) {
    height: ${(props) => (props.heightMobile ? props.heightMobile : "auto")};
  }
`;

const Hero = (props) => {
  return (
    <StyledHero backgroundColor="#f1f0f7" height="500px" heightMobile="250px">
      <Container
        mobileWidth="80%"
        width="70%"
        paddingMobileTop="2rem"
        paddingMobileBottom="0rem"
        paddingBottom="2rem"
      >
        <FlexBox width="100%">
          <FlexBox mobileWidth="60%" width="50%" direction="column">
            <Text
              color="#373f53"
              fontSize="30px"
              fontWeight="700"
              textAlign="left"
              marginBottom="1rem"
              marginMobileBottom=".1rem"
              fontMobileSize="20px"
            >
              For all of our Wholesale Registered Users
            </Text>
            <Text
              color="#60646e"
              fontSize="20px"
              fontWeight="500"
              textAlign="left"
              marginBottom="1rem"
              marginTop=".5rem"
              fontMobileSize="10px"
            >
              All our wholesale users can order meals in bulk using the very
              re-innovated system
            </Text>
            <FlexBox width="50%">
              <Button color="primary">Find Out More</Button>
            </FlexBox>
          </FlexBox>
          <Container
            mobileWidth="80%"
            width="70%"
            style={{ marginLeft: "-10rem" }}
          >
            <Image
              marginTop="5rem"
              marginLeft="-10rem"
              marginMobileTop="2rem"
              marginMobileLeft="7rem"
              width="150px"
              mobileWidth="50px"
              source={smallPlate}
              alt="salad round photo"
            />
            <Image
              marginTop="-9.5rem"
              marginLeft="18rem"
              marginMobileTop="0rem"
              marginMobileLeft="10rem"
              width="70%"
              mobileWidth="60%"
              source={largePlate}
              alt="salad round photo"
            />
          </Container>
        </FlexBox>
      </Container>
    </StyledHero>
  );
};

export default Hero;
