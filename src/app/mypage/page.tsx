"use client";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import TodayReportCard from "../../../component/card/TodayReportCard";
import TheHeader from "../../../component/header/TheHeader";

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
        padding={"60px 22px 0px 22px"}
        margin={"0 auto"}
        alignItems={"center"}
      >
        <TheHeader>
          <Text
            pos={"fixed"}
            onClick={() => router.push("/main")}
            cursor={"pointer"}
          >
            {"<"}
          </Text>
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
