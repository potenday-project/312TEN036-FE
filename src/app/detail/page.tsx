"use client";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import TodayReportCard from "../../../component/card/TodayReportCard";
import TheHeader from "../../../component/header/TheHeader";
import GoBackArrowIcon from "../../../component/icon/GoBackArrowIcon";
import CharacterImgCard from "../../../component/card/CharacterImgCard";

const Page = () => {
  const router = useRouter();

  return (
    <>
      <Flex
        flexDir={"column"}
        w={"100%"}
        h={"100vh"}
        pos={"relative"}
        maxW={"390px"}
        minH={"844px"}
        padding={"60px 22px 0px 22px"}
        margin={"0 auto"}
        alignItems={"center"}
        bgColor={"#181818"}
      >
        <TheHeader>
          <Box
            pos={"absolute"}
            cursor={"pointer"}
            onClick={() => router.push("/main")}
          >
            <GoBackArrowIcon />
          </Box>
          <Text
            margin={"0 auto"}
            color={"#FFFFFF"}
            fontSize={"20px"}
            fontWeight={"medium"}
          >
            레포트 상세보기
          </Text>
        </TheHeader>

        <VStack w={"100%"} spacing={"16px"}>
          <CharacterImgCard />
          <TodayReportCard bgColor={"#000000"}>
            <VStack alignItems={"flex-start"} spacing={"5px"}>
              <Text color={"#838383"}>00님의 하루 칼로리</Text>
              <Text fontWeight={"semibold"}>아침 : 계란후라이 200 kcal</Text>
              <Text fontWeight={"semibold"}>점심 : 짜장면 1000 kcal</Text>
              <Text fontWeight={"semibold"}>저녁 : 마라탕 800 kcal</Text>
            </VStack>
          </TodayReportCard>
          <TodayReportCard bgColor={"#000000"}>
            <VStack alignItems={"flex-start"} spacing={"5px"}>
              <Text color={"#838383"}>00님께 드리는 팩폭</Text>
              <Text fontWeight={"semibold"}>기초대사량에서 300 Kcal 초과</Text>
              <Text>권장 운동</Text>
              <Text fontWeight={"semibold"}>걷기 운동 1시간 이상</Text>
            </VStack>
          </TodayReportCard>
        </VStack>
      </Flex>
    </>
  );
};

export default Page;
