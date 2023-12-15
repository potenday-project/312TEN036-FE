import { Divider, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import ChattingMsgCard from "../card/ChattingMsgCard";
import DietChattingMsgCart from "./DietChattingMsgCard";
import ChattingInput from "../input/ChattingInput";
import HealthIcon from "../icon/HealthIcon";
import UserChattingMsgCard from "./UserChattingMsgCard";

const ChattingRoom = () => {
  return (
    <>
      <Flex
        w={"100%"}
        bgColor={"#F4F4F4"}
        h={"75%"}
        maxH={"1150px"}
        minH={"300px"}
        borderRadius={"12px 12px 0 0"}
        position={"absolute"}
        bottom={"0"}
        flexDir={"column"}
      >
        <VStack
          textAlign={"center"}
          w={"100%"}
          padding={"13px 22px"}
          spacing={"0.5px"}
          zIndex={100}
        >
          <HStack spacing={"2px"}>
            <HealthIcon />
            <Heading
              as={"h1"}
              color={"#000000"}
              fontSize={"20px"}
              fontWeight={"medium"}
            >
              식선생
            </Heading>
          </HStack>

          <Text as={"h2"} color={"#787878"} fontSize={"12px"} lineHeight={2}>
            다이어트는 의지의 차이입니다.
          </Text>
          <Divider padding={"4.5px 0"} color={"#ECECEC"} />
        </VStack>
        <VStack
          w={"100%"}
          alignItems={"flex-start"}
          spacing={"16px"}
          marginTop={"10px"}
          paddingBottom={"80px"}
          overflow={"hidden"}
          overflowY={"scroll"}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "24px",
            },
          }}
        >
          <ChattingMsgCard>반갑습니다 00님</ChattingMsgCard>
          <ChattingMsgCard>
            자, 오늘은 어떤 음식을 드셨나요?
            <br />
            아침, 점심, 저녁 메뉴를 알려주세요
            <Text as={"h2"} color={"#787878"} fontSize={"16px"} lineHeight={2}>
              {"ex) 아침은 00 점심은 00 저녁은 00을 먹었어"}
            </Text>
          </ChattingMsgCard>

          <UserChattingMsgCard>
            아침은 계란후라이 점심은 마라탕 저녁은 칼국수를 먹었어
          </UserChattingMsgCard>

          <DietChattingMsgCart />
        </VStack>
      </Flex>
      <ChattingInput />
    </>
  );
};

export default ChattingRoom;
