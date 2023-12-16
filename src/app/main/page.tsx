"use client";
import { Box, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import ChattingRoom from "../../../component/card/ChattingRoom";
import DietStateCard from "../../../component/card/DietStateCard";
import { useRouter } from "next/navigation";
import TheHeader from "../../../component/header/TheHeader";
import UserIcon from "../../../component/icon/UserIcon";
import TextLogoIcon from "../../../component/icon/TextLogoIcon";
import HealthMountainIcon from "../../../component/icon/HealthMountainIcon";
import Image from "next/image";
import mainStage1 from "../../../utils/img/mainStage1.png";

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
                  <Heading fontSize={"22px"}>
                    오늘{" "}
                    <Text as={"a"} color={"#40E98E"}>
                      30분 이상 달려야
                    </Text>
                    <br />
                    현재 몸무게 안정권 유지
                  </Heading>
                </Box>
                <Image
                  src={mainStage1}
                  alt="메인 캐릭터"
                  placeholder="blur"
                  style={{ width: "104px", height: "auto" }}
                  quality={100}
                />
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
