import { Box, Card, Flex, HStack, Text } from "@chakra-ui/react";
import HealthMountainIcon from "../icon/HealthMountainIcon";

const DietStateCard = () => {
  return (
    <Flex
      paddingTop={"20px"}
      margin={"0 auto"}
      color={"#F4F4F4"}
      flexDir={"row"}
      borderRadius={"12px"}
    >
      <HStack
        display={"flex"}
        margin={"0 auto"}
        w={"100%"}
        alignItems={"flex-end"}
      >
        <Box w={"100%"}>
          <Text fontSize={"16px"} color={"#787878"}>
            잠깐 스톱, 회원님 뭐드셨어요?
          </Text>
          <Text fontSize={"22px"}>
            식단을 입력하시면
            <br />
            오늘의 솔루션을 드릴게요
          </Text>
        </Box>
        <HealthMountainIcon />
      </HStack>
    </Flex>
  );
};

export default DietStateCard;
