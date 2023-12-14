"use client";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
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
            <VStack spacing={"12px"} alignItems={"flex-start"}>
              <Text color={"#959595"}>기본 정보</Text>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  성별
                </Text>
                <Text fontWeight={"semibold"}>남</Text>
              </HStack>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  나이
                </Text>
                <Text fontWeight={"semibold"}>21</Text>
              </HStack>
            </VStack>
          </TodayReportCard>

          <TodayReportCard>
            <VStack spacing={"12px"} alignItems={"flex-start"}>
              <Text color={"#959595"}>신체 정보</Text>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  키
                </Text>
                <Text fontWeight={"semibold"}>180cm</Text>
              </HStack>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  체중
                </Text>
                <Text fontWeight={"semibold"}>80kg</Text>
              </HStack>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  목표 체중
                </Text>
                <Text fontWeight={"semibold"}>80kg</Text>
              </HStack>
            </VStack>
          </TodayReportCard>

          <TodayReportCard>
            <VStack spacing={"12px"} alignItems={"flex-start"}>
              <Text color={"#959595"}>오늘 하루 칼로리</Text>
              <Text fontWeight={"semibold"}>아침 : </Text>
              <Text fontWeight={"semibold"}>점심 :</Text>
              <Text fontWeight={"semibold"}>저녁 :</Text>
            </VStack>
          </TodayReportCard>

          <Text fontSize={"18px"} alignSelf={"flex-start"} marginLeft={"15px"}>
            로그아웃
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default Page;
