import { TableContainer, Table, Tr, Th, HStack, Box,useMediaQuery } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import SingleTableRow from "./singleTableRow";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function CoinTable(props) {
  const [data, setData] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  React.useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&amp;order=market_cap_desc&amp;per_page=${props.pageRow}&amp;page=${pageNumber}&amp;sparkline=false&amp;price_change_percentage=24h%2C7d`
      )
      .then((response) => {
        setData(response.data);
      });
  }, [pageNumber,props.pageRow]);
  const [isLargerThanMobile] = useMediaQuery("(min-width: 64em)");

  return (
    <> 
      <TableContainer mt="26px" ml="-10px">
        <Table
          __css={{
            width: "100%",
          }}
          variant="simple"
          borderTopWidth="1px"
          borderTopColor="#EFF2F5"
          borderBottom="1px"
          borderBottomColor="#EFF2F5"

        >
          <Tr w="100%">
           {isLargerThanMobile && <Th fontWeight="900" fontSize="12px">
              #
            </Th>}
            <Th fontWeight="900" fontSize="12px" >
              NAME
            </Th>
            <Th fontWeight="900" fontSize="12px">
              PRICE
            </Th>
            <Th fontWeight="900" fontSize="12px">
              24H
            </Th>
            <Th fontWeight="900" fontSize="12px">
              7D
            </Th>
            <Th fontWeight="900" fontSize="12px">
              MARKET CAP
            </Th>
            <Th fontWeight="900">VOLUME(24H)</Th>
            <Th fontWeight="900" fontSize="12px">
              CICULATING SUPPLY
            </Th>
          </Tr>
          {data?.map((data, index) => (
            <SingleTableRow data={data} key={index} index={index + 1} />
          ))}
        </Table>
      </TableContainer>
      <HStack justifyContent="end" mt="21px" pb="30px">
        <Box borderWidth="1px" borderColor="#DFE3E8" py="5px" px="8px">
          <AiOutlineLeft onClick={() => {pageNumber > 1 && setPageNumber(pageNumber - 1)  }} />
        </Box>
        <Box borderWidth="1px" borderColor="#0052FE" py="5px" px="8px">
          {pageNumber}
        </Box>
        <Box
          borderWidth="1px"
          borderColor="#DFE3E8"
          py="5px"
          px="8px"
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          {pageNumber + 1}
        </Box>
        <Box
          borderWidth="1px"
          borderColor="#DFE3E8"
          py="5px"
          px="8px"
          onClick={() => setPageNumber(pageNumber + 2)}
        >
          {pageNumber + 2}
        </Box>
        <Box
          borderWidth="1px"
          borderColor="#DFE3E8"
          py="5px"
          px="8px"
          onClick={() => setPageNumber(pageNumber + 10)}
        >
          ...
        </Box>
        <Box borderWidth="1px" borderColor="#DFE3E8" py="5px" px="8px">
        <AiOutlineRight onClick={() => {pageNumber < 100 && setPageNumber(pageNumber + 1)}} />
        </Box>
      </HStack>
    </>
  );
}

export default CoinTable;
