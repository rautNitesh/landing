import React from "react";

import Text from "../common/Text";
import Image from "../common/Image";
import FlexBox from "../common/FlexBox";
import Instagram from "../../assets/images/icons/instagram.png";
import facebook from "../../assets/images/icons/facebook.png";
import Container from "../common/Container";

const ContactInformation = () => {
  return (
    <FlexBox
      width="250px"
      margin="0 0 1rem 0"
      textAlign="left"
      direction="column"
    >
      <Text
        textTransform="uppercase"
        fontSize="18px"
        fontWeight="700"
        color="#373f53"
        textAlign="left"
      >
        Contact Information
      </Text>
      <Text
        marginTop="2rem"
        fontSize="15px"
        textAlign="left"
        fontWeight="700"
        color="#9e99ba"
      >
        Food4Fitness
      </Text>
      <Text
        marginTop="1rem"
        fontSize="15px"
        textAlign="left"
        fontWeight="700"
        color="#9e99ba"
      >
        Phone:
      </Text>
      <Text fontSize="15px" textAlign="left" fontWeight="300" color="#f69447">
        <u>1300 MACROS (1300 622 767)</u>
      </Text>
      <Text
        marginTop="1rem"
        fontSize="15px"
        textAlign="left"
        fontWeight="700"
        color="#9e99ba"
      >
        Email:
      </Text>
      <Text fontSize="15px" textAlign="left" fontWeight="300" color="#f69447">
        <u>admin@food4fitness@com.au</u>
      </Text>
      <Text
        marginTop="1rem"
        fontSize="15px"
        textAlign="left"
        fontWeight="700"
        color="#9e99ba"
      >
        Follow us:
      </Text>
      <Container
        paddingTop="1.5rem"
        textAlign="left"
        mobileWidth="100%"
        width="100%"
      >
        <Image source={facebook} />
        <Image marginLeft="1rem" marginMobileLeft="1rem" source={Instagram} />
      </Container>
    </FlexBox>
  );
};

export default ContactInformation;
