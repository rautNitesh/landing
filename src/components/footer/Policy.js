import React from "react";

import Text from "../common/Text";
import styled from "styled-components";
import FlexBox from "../common/FlexBox";
import Container from "../common/Container";

const Line = styled.div`
  margin: auto;
  border-bottom: 1px solid #373f53;
  opacity: 0.3;
  padding-bottom: 0.5rem;
  width: 73%;
`;

const Policy = () => {
  return (
    <Container width="100%" paddingTop="1rem" paddingBottom="1rem">
      <Line />

      <FlexBox width="80%" padding="1rem 0 0 0" justify="space-around">
        <FlexBox width="60%" justify="left">
          <Text color="#373f53" fontSize="15px" fontWeight="300">
            &copy; 2020 Food 4 Fitness
          </Text>
          <Text
            marginLeft="5px"
            marginRight="5px"
            color="#373f53"
            fontSize="15px"
            fontWeight="300"
          >
            |
          </Text>
          <Text color="#373f53" fontSize="15px" fontWeight="300">
            Privacy
          </Text>
          <Text
            marginLeft="5px"
            marginRight="5px"
            color="#373f53"
            fontSize="15px"
            fontWeight="300"
          >
            |
          </Text>
          <Text color="#373f53" fontSize="15px" fontWeight="300">
            Terms
          </Text>
        </FlexBox>
        <Container width="20%">
          <Text color="#373f53" fontSize="15px" fontWeight="300">
            Developed by{" "}
            <Text color="#373f53" fontSize="15px" fontWeight="400">
              Wasabi Software
            </Text>
          </Text>
        </Container>
      </FlexBox>
    </Container>
  );
};

export default Policy;
