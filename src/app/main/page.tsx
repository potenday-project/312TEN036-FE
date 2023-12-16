"use client";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import ChattingRoom, {
  DietMsgType,
} from "../../../component/card/ChattingRoom";
import DietStateCard from "../../../component/card/DietStateCard";
import { redirect, useRouter } from "next/navigation";
import TheHeader from "../../../component/header/TheHeader";
import UserIcon from "../../../component/icon/UserIcon";
import TextLogoIcon from "../../../component/icon/TextLogoIcon";
import HealthMountainIcon from "../../../component/icon/HealthMountainIcon";
import DietStateSection from "../../../component/section/DietStateSection";
import { usePostUserDiet } from "../../../utils/hooks/usePostUserDiet";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { UserInfoType } from "../../../component/template/SignupTemplate";

export interface UserPostDietData extends UserInfoType {
  query: string;
  userId?: string | null;
}

// {
//   "name": "서경원",
//   "height": 123,
//   "weight": 432,
//   "age": 12,
//   "gender": "남성",
//   "targetWeight": 321,
//   "query": "오늘 아침은 우유 1컵, 점심은 된장찌개랑 갈비조림, 저녁은 마라탕"
// }

const Page = () => {
  const router = useRouter();
  const [chattingData, setChattingData] = useState<string>("");

  const {
    data: dietResponseData,
    postUserDietMutation,
    isLoading,
  } = usePostUserDiet();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<DietMsgType>();

  const onSubmit: SubmitHandler<DietMsgType> = async (data) => {
    localStorage.removeItem("userDiet");
    reset();
    const userInfoString: string | null = localStorage.getItem("userInfo");

    if (userInfoString !== null) {
      const userInfo: UserInfoType = JSON.parse(userInfoString);
      const userInfoData: UserPostDietData = {
        query: data.msg,
        name: userInfo.name,
        age: userInfo.age,
        weight: userInfo.weight,
        height: userInfo.height,
        targetWeight: userInfo.targetWeight,
        gender: userInfo.gender,
      };
      setChattingData(data.msg);
      await postUserDietMutation(userInfoData);

      localStorage.setItem("userDiet", JSON.stringify(dietResponseData));
    }
  };

  return (
    <>
      <Flex
        flexDir={"column"}
        w={"100%"}
        h={"100vh"}
        pos={"relative"}
        margin={"0 auto"}
        maxW={"420px"}
        minW={"390px"}
        padding={"60px 0px 0px 0px"}
        bgColor={"#2B2C2C"}
        alignItems={"center"}
      >
        <TheHeader>
          <TextLogoIcon />
          <Text onClick={() => router.push("/mypage")} cursor={"pointer"}>
            <UserIcon />
          </Text>
        </TheHeader>
        <VStack spacing={"20px"} w={"100%"} h={"100%"}>
          {!dietResponseData ? (
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
              <DietStateSection dietResponseData={dietResponseData} />
            </DietStateCard>
          )}

          <ChattingRoom
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            chattingData={chattingData}
            isLoading={isLoading}
            dietResponseData={dietResponseData}
          />
        </VStack>
      </Flex>
    </>
  );
};

export default Page;
