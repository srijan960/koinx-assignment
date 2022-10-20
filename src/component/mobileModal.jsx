import {
  Text,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
  VStack,
  Progress,
} from "@chakra-ui/react";
import React from "react";

function MobileModal(props) {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {" "}
            <HStack>
              {props.data.image && (
                <Image boxSize="24px" src={props.data.image} />
              )}
              <Text>{props.data.name || "NA"}</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <HStack w="100%" justifyContent="space-between">
                <VStack alignItems="flex-start">
                  <Text fontWeight="700" fontSize="13px">
                    PRICE
                  </Text>
                  <Text fontWeight="700" fontSize="14px">
                    ${props.data.current_price.toLocaleString() || "NA"}
                  </Text>
                </VStack>
                <VStack alignItems="flex-start">
                  <Text fontWeight="700" fontSize="13px">
                    24H
                  </Text>
                  <Text
                    fontWeight="700"
                    fontSize="14px"
                    textColor={
                      props.data.price_change_percentage_24h &&
                      props.data.price_change_percentage_24h < 0
                        ? "#EA3943"
                        : "#16C784"
                    }
                  >
                    %
                    {props.data.price_change_percentage_24h
                      ? Math.abs(
                          props.data.price_change_percentage_24h.toFixed(2)
                        )
                      : "NA"}
                  </Text>
                </VStack>
                <VStack alignItems="flex-start">
                  <Text fontWeight="700" fontSize="13px">
                    7D
                  </Text>
                  <Text
                    fontWeight="700"
                    fontSize="14px"
                    textColor={
                      props.data.price_change_percentage_7d_in_currency &&
                      props.data.price_change_percentage_7d_in_currency < 0
                        ? "#EA3943"
                        : "#16C784"
                    }
                  >
                    %
                    {props.data.price_change_percentage_7d_in_currency
                      ? Math.abs(
                          props.data.price_change_percentage_7d_in_currency.toFixed(
                            2
                          )
                        )
                      : "-"}
                  </Text>
                </VStack>
              </HStack>
              <HStack w="100%" alignItems="flex-start" pt="29px">
                <VStack alignItems="flex-start">
                  <Text fontWeight="700" fontSize="13px">
                    MARKET CAP
                  </Text>
                  <Text fontWeight="700" fontSize="14px">
                    ${props.data.market_cap.toLocaleString() || "-"}
                  </Text>
                </VStack>
              </HStack>
              <HStack w="100%" alignItems="flex-start" pt="29px">
                <VStack alignItems="flex-start">
                  <Text fontWeight="700" fontSize="13px">
                    VOLUMNE (24H)
                  </Text>
                  <Text fontWeight="700" fontSize="14px">
                    ${props.data.total_volume.toLocaleString() || "-"}
                  </Text>
                </VStack>
              </HStack>
              <HStack w="100%" alignItems="flex-start" pt="29px">
                <VStack alignItems="flex-start" pb="30px">
                  <Text fontWeight="700" fontSize="13px">
                    CIRCULATING SUPPLY
                  </Text>
                  <Text fontWeight="700" fontSize="14px">
                    ${props.data.circulating_supply.toLocaleString() || "-"}{" "}
                  </Text>
                  <Progress
                    w="100%"
                    colorScheme="#CFD6E4;"
                    value={
                      (props.data.circulating_supply /
                        props.data.total_supply) *
                      100
                    }
                    h="6px"
                  />
                </VStack>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MobileModal;
