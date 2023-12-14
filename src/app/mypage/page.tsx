"use client";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import TodayReportCard from "../../../component/card/TodayReportCard";
import TheHeader from "../../../component/header/TheHeader";
import { useUser } from "../../../utils/hooks/useUser";
import CloseIcon from "../../../component/icon/CloseIcon";
import Image from "next/image";

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
          <Text margin={"0 auto"} fontSize={"20px"} fontWeight={"medium"}>
            마이페이지
          </Text>
          <Box
            pos={"absolute"}
            right={"22px"}
            cursor={"pointer"}
            onClick={() => router.push("/main")}
          >
            <CloseIcon />
          </Box>
        </TheHeader>
        <VStack w={"100%"} spacing={"15px"} margin={"20px 0 0 0 "}>
          <VStack spacing={"3px"}>
            <Image
              src={
                "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
              }
              style={{ width: "94px", height: "94px" }}
              alt="식선생"
              width={100}
              height={100}
            />
            <Text
              textAlign={"center"}
              color={"#2F2F2F"}
              fontWeight={"semibold"}
              fontSize={"18px"}
            >
              김식단
            </Text>
          </VStack>
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
