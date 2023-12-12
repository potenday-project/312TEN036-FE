import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

const DietChattingMsgCart = ({}: CardProps) => {
  return (
    <>
      <Card
        w={"312px"}
        bgColor={"#F5F5F9"}
        shadow={"none"}
        margin={"0px 0px 0px 22px"}
      >
        <CardHeader padding={"14px 16px 0 16px"}>
          <Flex justifyContent={"space-between"} textAlign={"center"}>
            <Box>
              <Text as={"h2"} color={"#787878"} fontSize={"15px"}>
                아침
              </Text>
              <Heading
                as={"h1"}
                color={"#000000"}
                fontSize={"18px"}
                fontWeight={"regular"}
              >
                200 Kcal
              </Heading>
            </Box>
            <Box>
              <Text as={"h2"} color={"#787878"} fontSize={"15px"}>
                점심
              </Text>
              <Heading
                as={"h1"}
                color={"#000000"}
                fontSize={"18px"}
                fontWeight={"regular"}
              >
                1000 Kcal
              </Heading>
            </Box>
            <Box>
              <Text as={"h2"} color={"#787878"} fontSize={"15px"}>
                저녁
              </Text>
              <Heading
                as={"h1"}
                color={"#000000"}
                fontSize={"18px"}
                fontWeight={"regular"}
              >
                900 Kcal
              </Heading>
            </Box>
          </Flex>
          <Divider margin={"0 auto"} padding={"4.5px 0"} color={"#ECECEC"} />
          <Text
            textAlign={"center"}
            paddingTop={"4.5px"}
            color={"#FF6C6C"}
            fontWeight={"medium"}
          >
            300 Kcal가 초과되셨습니다.
          </Text>
        </CardHeader>
        <CardBody color={"#2F2F2F"} padding={"16px 14px 14px 14px"}>
          <Button bgColor={"#FFFFFF"} w={"100%"} h={"41px"}>
            식단 상세보기
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default DietChattingMsgCart;
