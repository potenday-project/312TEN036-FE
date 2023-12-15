"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Divider,
  Flex,
  HStack,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import WarningIcon from "../icon/WarningIcon";
import { useRouter } from "next/navigation";
import { DietResponse } from "../../utils/api/AxiosSetting";

interface DietChattingMsgCard extends CardProps {
  isLoading: boolean;
  dietResponseData: DietResponse | undefined;
}

const DietChattingMsgCart = ({
  isLoading,
  dietResponseData,
}: DietChattingMsgCard) => {
  const router = useRouter();
  return (
    <>
      <Card
        w={isLoading ? "187px" : "312px"}
        bgColor={"#FFFFFF"}
        shadow={"none"}
        margin={"0px 0px 0px 22px"}
      >
        {isLoading && (
          <CardBody>
            <Spinner />
          </CardBody>
        )}
        {dietResponseData && !isLoading && (
          <>
            <CardHeader padding={"14px 16px 0 16px"}>
              <Flex justifyContent={"space-between"} textAlign={"center"}>
                <Box>
                  <Text as={"h2"} color={"#00C27C"} fontSize={"15px"}>
                    아침
                  </Text>
                  <Heading
                    as={"h1"}
                    color={"#000000"}
                    fontSize={"18px"}
                    fontWeight={"regular"}
                  >
                    {dietResponseData?.아침}
                  </Heading>
                </Box>
                <Box>
                  <Text as={"h2"} color={"#00C27C"} fontSize={"15px"}>
                    점심
                  </Text>
                  <Heading
                    as={"h1"}
                    color={"#000000"}
                    fontSize={"18px"}
                    fontWeight={"regular"}
                  >
                    {dietResponseData?.점심}
                  </Heading>
                </Box>
                <Box>
                  <Text as={"h2"} color={"#00C27C"} fontSize={"15px"}>
                    저녁
                  </Text>
                  <Heading
                    as={"h1"}
                    color={"#000000"}
                    fontSize={"18px"}
                    fontWeight={"regular"}
                  >
                    {dietResponseData?.저녁}
                  </Heading>
                </Box>
              </Flex>
              <Divider
                margin={"0 auto"}
                padding={"4.5px 0"}
                color={"#ECECEC"}
              />

              <HStack justifyContent={"center"}>
                <WarningIcon />
                <Text
                  textAlign={"center"}
                  paddingTop={"4.5px"}
                  color={"#FF6C6C"}
                  fontWeight={"semibold"}
                  fontSize={"17px"}
                >
                  {dietResponseData?.초과칼로리}를 초과하셨습니다.
                </Text>
              </HStack>
            </CardHeader>
            <CardBody color={"#2F2F2F"} padding={"14px 14px 14px 14px"}>
              <Button
                onClick={() => router.push("/detail")}
                bgColor={"#E7E7E7"}
                w={"100%"}
                h={"41px"}
              >
                <Text color={"#525252"}>식단 상세보기</Text>
              </Button>
            </CardBody>
          </>
        )}
      </Card>
    </>
  );
};

export default DietChattingMsgCart;
