import React from "react";

import Text from "../common/Text";
import Image from "../common/Image";
import FlexBox from "../common/FlexBox";
import Logo from "../../assets/images/icons/logo.png";

const LogoInfo = () => {
  return (
    <FlexBox margin="0 0 1rem 0" width="250px" direction="column">
      <Image
        cursor="pointer"
        marginMobileLeft="0rem"
        source={Logo}
        width="80px"
      />
      <Text
        color="#9e99ba"
        fontSize="12px"
        lineHeight="1.5"
        textAlign="left"
        marginTop="2rem"
      >
        We offer top quality sustainable nutritional food: Premium protein,
        lower GI carbohydrate, fibre, vitamins, minerals and healthy fats.
      </Text>
    </FlexBox>
  );
};
export default LogoInfo;
