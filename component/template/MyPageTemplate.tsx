import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MyPageCharacter from "../../utils/img/MypageCharacter.png";
import { useEffect, useState } from "react";
import TheHeader from "../header/TheHeader";
import CloseIcon from "../icon/CloseIcon";
import TodayReportCard from "../card/TodayReportCard";
import { UserInfoType } from "./SignupTemplate";

const MyPageTemplate = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserInfoType>();

  useEffect(() => {
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo !== null) {
      const userParsing: UserInfoType = JSON.parse(userInfo);
      console.log(userParsing);
      setUserData(userParsing);
    }
  }, [setUserData]);

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
        bgColor={"#F4F4F4"}
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
        <VStack w={"100%"} spacing={"15px"}>
          <VStack spacing={"16px"}>
            <Box bgColor={"white"} borderRadius={"40px"}>
              <Image
                src={MyPageCharacter}
                alt="식선생"
                placeholder="blur"
                style={{ width: "104px", height: "auto" }}
                quality={100}
              />
            </Box>
            <Text
              textAlign={"center"}
              color={"#2F2F2F"}
              fontWeight={"semibold"}
              fontSize={"18px"}
            >
              {userData?.name}
            </Text>
          </VStack>
          <TodayReportCard bgColor={"#FFFFFF"}>
            <VStack spacing={"12px"} alignItems={"flex-start"}>
              <Text color={"#00CE84"}>기본 정보</Text>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  성별
                </Text>
                <Text fontWeight={"semibold"} color={"#2F2F2F"}>
                  {userData?.gender}
                </Text>
              </HStack>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  나이
                </Text>
                <Text fontWeight={"semibold"} color={"#2F2F2F"}>
                  {userData?.age}
                </Text>
              </HStack>
            </VStack>
          </TodayReportCard>

          <TodayReportCard>
            <VStack spacing={"12px"} alignItems={"flex-start"}>
              <Text color={"#00CE84"}>신체 정보</Text>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  키
                </Text>
                <Text fontWeight={"semibold"} color={"#2F2F2F"}>
                  {userData?.height}
                </Text>
              </HStack>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  체중
                </Text>
                <Text fontWeight={"semibold"} color={"#2F2F2F"}>
                  {userData?.weight}
                </Text>
              </HStack>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  목표 체중
                </Text>
                <Text fontWeight={"semibold"} color={"#2F2F2F"}>
                  {userData?.targetweight}
                </Text>
              </HStack>
            </VStack>
          </TodayReportCard>

          <TodayReportCard>
            <VStack spacing={"12px"} alignItems={"flex-start"}>
              <Text color={"#00CE84"}>오늘 하루 칼로리</Text>
              <Text color={"#2F2F2F"}>아침 : </Text>
              <Text color={"#2F2F2F"}>점심 :</Text>
              <Text color={"#2F2F2F"}>저녁 :</Text>
            </VStack>
          </TodayReportCard>

          <Text
            fontSize={"18px"}
            alignSelf={"flex-start"}
            marginLeft={"15px"}
            cursor={"pointer"}
            onClick={() => {
              localStorage.removeItem(`jwt`);
              router.push("/");
            }}
          >
            로그아웃
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default MyPageTemplate;
