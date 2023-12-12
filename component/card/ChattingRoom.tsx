import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import ChattingMsgCard from "../card/ChattingMsgCard";
import UserChattingMsgCard from "./UserChattingMsgCard";
import DietChattingMsgCart from "./DietChattingMsgCard";
import ChattingInput from "../input/ChattingInput";

const ChattingRoom = () => {
  return (
    <>
      <Flex
        w={"100%"}
        bgColor={"#FFFFFF"}
        h={"80%"}
        borderRadius={"12px 12px 0 0"}
        position={"absolute"}
        bottom={"0"}
        overflow={"scroll"}
        flexDir={"column"}
      >
        <Box textAlign={"center"} w={"100%"} padding={"10px 22px"}>
          <Heading
            as={"h1"}
            color={"#000000"}
            fontSize={"20px"}
            fontWeight={"medium"}
          >
            식선생
          </Heading>
          <Text as={"h2"} color={"#787878"} fontSize={"12px"} lineHeight={2}>
            다이어트는 의지의 차이입니다.
          </Text>
          <Divider padding={"4.5px 0"} color={"#ECECEC"} />
        </Box>
        <Box>
          <ChattingMsgCard>반갑습니다 00님</ChattingMsgCard>
          <ChattingMsgCard>
            자, 오늘은 어떤 음식을 드셨나요?
            <br />
            아침, 점심, 저녁 메뉴를 알려주세요
            <Text as={"h2"} color={"#787878"} fontSize={"16px"} lineHeight={2}>
              ex) 아침은 00 점심은 00 저녁은 00을 먹었어
            </Text>
          </ChattingMsgCard>

          <UserChattingMsgCard>
            아침은 계란후라이 점심은 마라탕 저녁은 칼국수를 먹었어
          </UserChattingMsgCard>

          <DietChattingMsgCart />
        </Box>
        <ChattingInput />
      </Flex>
    </>
  );
};

export default ChattingRoom;
