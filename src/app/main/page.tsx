"use client";
import { Box, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import ChattingRoom from "../../../component/card/ChattingRoom";
import DietStateCard from "../../../component/card/DietStateCard";
import { useRouter } from "next/navigation";
import TheHeader from "../../../component/header/TheHeader";
import UserIcon from "../../../component/icon/UserIcon";
import TextLogoIcon from "../../../component/icon/TextLogoIcon";
import HealthMountainIcon from "../../../component/icon/HealthMountainIcon";

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
        padding={"60px 0px 0px 0px"}
        margin={"0 auto"}
        bgColor={"#2B2C2C"}
        alignItems={"center"}
      >
        <TheHeader>
          <TextLogoIcon />
          <Text onClick={() => router.push("/mypage")} cursor={"pointer"}>
            <UserIcon />
          </Text>
        </TheHeader>
        <VStack spacing={"20px"} w={"100%"}>
          {false ? (
            <DietStateCard>
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
            </DietStateCard>
          ) : (
            <DietStateCard>
              <HStack
                display={"flex"}
                margin={"0 auto"}
                w={"100%"}
                alignItems={"flex-end"}
              >
                <Box w={"100%"}>
                  <Text fontSize={"16px"} color={"#787878"}>
                    200Kcal 초과
                  </Text>
                  <Heading>
                    오늘 <Text color={"#40E98E"}>30분 이상 달려야</Text>
                    <br />
                    현재 몸무게 안정권 유지
                  </Heading>
                </Box>
                <HealthMountainIcon />
              </HStack>
            </DietStateCard>
          )}

          <ChattingRoom />
        </VStack>
      </Flex>
    </>
  );
};

export default Page;
