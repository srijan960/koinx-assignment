import {
  Tr,
  Tbody,
  Td,
  HStack,
  Image,
  Text,
  useMediaQuery,
  useDisclosure,
  Progress,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import MobileModal from "./mobileModal";

function SingleTableRow(props) {
  const [isLargerThanMobile] = useMediaQuery("(min-width: 64em)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tbody h="80px" onClick={() => onOpen(true)}>
        <Tr fontSize="14px" fontWeight="500" pr="15px" alignItems="center">
          {isLargerThanMobile && (
            <Td alignItems="center">
              <HStack>
                <AiOutlineStar />
                <Text>{props.data.market_cap_rank}</Text>
              </HStack>
            </Td>
          )}
          <Td>
            <HStack>
              {!isLargerThanMobile && <AiOutlineStar />}
              {props.data.image && (
                <Image boxSize="24px" src={props.data.image} />
              )}
              <Text>{props.data.name || "NA"}</Text>
              <Text textColor="#808A9D">
                {props.data.symbol.toUpperCase() || "NA"}
              </Text>
            </HStack>
          </Td>
          <Td>${props.data.current_price.toLocaleString() || "NA"}</Td>
          <Td
            textColor={
              props.data.price_change_percentage_24h &&
              props.data.price_change_percentage_24h < 0
                ? "#EA3943"
                : "#16C784"
            }
          >
            %
            {props.data.price_change_percentage_24h
              ? Math.abs(props.data.price_change_percentage_24h.toFixed(2))
              : "NA"}
          </Td>
          <Td
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
                  props.data.price_change_percentage_7d_in_currency.toFixed(2)
                )
              : "-"}
          </Td>
          <Td>${props.data.market_cap.toLocaleString() || "-"}</Td>
          <Td>${props.data.total_volume.toLocaleString() || "-"}</Td>
          <Td>
            <Text>
              ${props.data.circulating_supply.toLocaleString() || "-"}{" "}
            </Text>
            <Progress
              colorScheme="#CFD6E4;"
              value={
                (props.data.circulating_supply / props.data.total_supply) * 100
              }
              h="6px"
            />
          </Td>
        </Tr>
      </Tbody>
      {isOpen && !isLargerThanMobile && (
        <MobileModal isOpen={isOpen} onClose={onClose} data={props.data} />
      )}
    </>
  );
}

export default SingleTableRow;
