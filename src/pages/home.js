import {
  HStack,
  Text,
  Box,
  Image,
  Flex,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuItem,
  Button,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import HomePageTile from "../component/homePageTile";
import React, { useState } from "react";
import CoinTable from "../component/coinTable";
import FilterPill from "../component/filterPill";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { IoEllipseOutline, IoEllipse } from "react-icons/io5";

function Home() {
  const [isLargerThanMobile] = useMediaQuery("(min-width: 64em)");
  const [pageRow, setPageRow] = useState(10);
  const [isLargerThan1024] = useMediaQuery("(min-width: 1025px)");
  const [tileIndex, setTileIndex] = useState(1);

  return (
    <>
      <HStack
        borderBottomColor="#E5E5E5"
        borderBottomWidth="1px"
        w="100%"
        justifyContent="space-between"
        bg="white"
        px={["20px", "206px"]}
      >
        <Flex py="13px">
          {!isLargerThanMobile && (
            <Flex alignItems="center" justifyContent="space-between" w="40px">
              <GiHamburgerMenu />
            </Flex>
          )}

          <Image src="/c-logo.png" />
          <Text fontWeight="700" fontSize="20px" ml="5px">
            Crypto Tracker
          </Text>
        </Flex>
        {isLargerThanMobile && (
          <Flex alignItems="center" justifyContent="space-between" w="40px">
            <BiSearch />
            <GiHamburgerMenu />
          </Flex>
        )}
      </HStack>
      <Box height="100%" w="100%" bg="#F8FAFC" px={["15px", "206px"]}>
        <HStack
          pt={["21px", "33px"]}
          alignItems="center"
          justifyContent="center"
        >
          {isLargerThanMobile ? (
            <>
              <AiFillLeftCircle fill="#A8B0C1" size="30px" />
              <HomePageTile
                imageUrl={"/homeTileImage1.png"}
                normalText="Take a quiz!"
                boldText="Learn and earn $CKB"
              />

              <HomePageTile
                imageUrl={"/homeTileImage2.png"}
                normalText="Portfolio 🔥"
                boldText="Track your trades in one place,
not all over the place"
              />

              {isLargerThan1024 && (
                <HomePageTile
                  imageUrl={"/homeTileImage3.png"}
                  normalText="Portfolio"
                  boldText="Track your trades in one place,
          not all over the place"
                />
              )}
              <AiFillRightCircle fill="#A8B0C1" size="30px" />
            </>
          ) : (
            <>
              <AiFillLeftCircle
                fill="#A8B0C1"
                size="30px"
                onClick={() => {
                  tileIndex > 1 && setTileIndex(tileIndex - 1);
                }}
              />{" "}
              <VStack>
                {tileIndex === 1 && (
                  <HomePageTile
                    imageUrl={"/homeTileImage1.png"}
                    normalText="Take a quiz!"
                    boldText="Learn and earn $CKB"
                  />
                )}
                {tileIndex === 2 && (
                  <HomePageTile
                    imageUrl={"/homeTileImage2.png"}
                    normalText="Portfolio 🔥"
                    boldText="Track your trades in one place,
    not all over the place"
                  />
                )}
                {tileIndex === 3 && (
                  <HomePageTile
                    imageUrl={"/homeTileImage3.png"}
                    normalText="Portfolio"
                    boldText="Track your trades in one place,
          not all over the place"
                  />
                )}
                <HStack mt="15px">
                  {[...Array(3)].map((v, idx) => {
                    return idx + 1 === tileIndex ? (
                      <IoEllipse color={"#0052FE"} />
                    ) : (
                      <IoEllipseOutline color={"#0052FE"} />
                    );
                  })}
                </HStack>
              </VStack>
              <AiFillRightCircle
                onClick={() => {
                  tileIndex < 3 && setTileIndex(tileIndex + 1);
                }}
                fill="#A8B0C1"
                size="30px"
              />
            </>
          )}
        </HStack>
        <Text fontWeight="700" fontSize="24px" pt="22px">
          Top 100 Cryptocurrencies by Market Cap
        </Text>
        {isLargerThanMobile && (
          <HStack mt="30px" justifyContent="space-between">
            <HStack>
              <FilterPill text={"Favourites"} showIcon={true} />
              <FilterPill text={"CryptoCurrencies"} />
              <FilterPill text={"DeFi"} />
              <FilterPill text={"NFTs & Collectibles"} />
            </HStack>
            <HStack alignItems="center">
              <Text fontSize="13px" fontWeight="400" textColor="#5B667C">
                show Rows
              </Text>
              <Menu>
                <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                  {pageRow}
                </MenuButton>
                <MenuList minW="0px" w="70px">
                  <MenuItem onClick={() => setPageRow(10)}>10</MenuItem>
                  <MenuItem onClick={() => setPageRow(20)}>20</MenuItem>
                  <MenuItem onClick={() => setPageRow(30)}>30</MenuItem>
                  <MenuItem onClick={() => setPageRow(40)}>40</MenuItem>
                  <MenuItem onClick={() => setPageRow(50)}>50</MenuItem>
                  <MenuItem onClick={() => setPageRow(60)}>60</MenuItem>
                  <MenuItem onClick={() => setPageRow(70)}>70</MenuItem>
                  <MenuItem onClick={() => setPageRow(80)}>80</MenuItem>
                  <MenuItem onClick={() => setPageRow(90)}>90</MenuItem>
                  <MenuItem onClick={() => setPageRow(100)}>100</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
        )}
        <CoinTable pageRow={pageRow} />
      </Box>
    </>
  );
}

export default Home;
