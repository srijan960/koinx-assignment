import {  Text, Box, HStack} from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";


function FilterPill(props) {
  return (
    <HStack bg="#EFF2F5" maxW="140px" h="32px" px="8px">
        {props.showIcon && <AiOutlineStar size="12px" />}
          <Text fontSize="12px" fontWeight="500" textColor="#5B667C">
            {props.text}
          </Text>
    </HStack>
  );
}

export default FilterPill;
