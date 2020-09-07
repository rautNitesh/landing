import React from "react";

import Text from "../common/Text";
import styled from "styled-components";
import FlexBox from "../common/FlexBox";

const Line = styled.div`
  margin: 1rem 0;
  border-bottom: 1px solid #373f53;
  opacity: 0.5;
  padding-bottom: 0.5rem;
  width: 100%;
`;

const CustomerService = () => {
  return (
    <FlexBox
      margin="0 0 1rem 0"
      width="250px"
      justify="space-between"
      direction="column"
    >
      <Text
        textTransform="uppercase"
        fontSize="18px"
        fontWeight="700"
        color="#373f53"
        textAlign="left"
      >
        customer service
      </Text>
      <Text
        marginTop="2rem"
        fontSize="15px"
        textAlign="left"
        fontWeight="300"
        color="#9e99ba"
      >
        Contact Us
      </Text>
      <Text
        marginTop="1rem"
        fontSize="15px"
        textAlign="left"
        fontWeight="300"
        color="#9e99ba"
      >
        Become a Wholesaler
      </Text>
      <Line />
      <Text
        marginTop="1rem"
        fontSize="15px"
        textAlign="left"
        fontWeight="300"
        color="#9e99ba"
      >
        Login
      </Text>
    </FlexBox>
  );
};

export default CustomerService;
