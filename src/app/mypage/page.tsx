"use client";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import TodayReportCard from "../../../component/card/TodayReportCard";
import TheHeader from "../../../component/header/TheHeader";
import GoBackArrowIcon from "../../../component/icon/GoBackArrowIcon";
import { useUser } from "../../../utils/hooks/useUser";

const Page = () => {
  const router = useRouter();

  const { data } = useUser();

  return (
    <>
      <Flex
        flexDir={"column"}
        w={"100%"}
        h={"100vh"}
        pos={"relative"}
        maxW={"390px"}
        padding={"60px 22px 0px 22px"}
        margin={"0 auto"}
        alignItems={"center"}
      >
        <TheHeader>
          <Box
            pos={"absolute"}
            cursor={"pointer"}
            onClick={() => router.push("/main")}
          >
            <GoBackArrowIcon />
          </Box>
          <Text margin={"0 auto"} fontSize={"20px"} fontWeight={"medium"}>
            마이페이지
          </Text>
        </TheHeader>
        <VStack w={"100%"} spacing={"22px"} margin={"20px 0 0 0 "}>
          <TodayReportCard>
            내 정보
            <br />
            <Text fontWeight={"semibold"}>이름</Text>
            <Text fontWeight={"semibold"}>성별</Text>
            <Text fontWeight={"semibold"}>나이</Text>
            <Text fontWeight={"semibold"}>체중</Text>
            <Text fontWeight={"semibold"}>목표체중</Text>
          </TodayReportCard>
          <TodayReportCard>오늘의 식단</TodayReportCard>

          <Text fontSize={"18px"} alignSelf={"flex-start"} marginLeft={"15px"}>
            로그아웃
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default Page;
