import { HStack, Text, Box, Image, VStack } from "@chakra-ui/react";
import React from "react";

function HomePageTile(props) {
  return (
    <Box height="132px" w={["330px","400px"]} bg="white" py="10px" px="10px" borderRadius="12px">
      <HStack alignItems="flex-start">
        <Image boxSize="100px" src={props.imageUrl} />
        <VStack pl="10px" alignItems="flex-start">
          <Text fontWeight="300" fontSize="18px" mb="-5px">
            {props.normalText}
          </Text>
          <Text fontSize="18px" fontWeight="600">
            {props.boldText}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default HomePageTile;
