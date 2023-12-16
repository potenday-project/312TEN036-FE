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
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

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

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    const userInfo = localStorage.getItem("userInfo");
    if (!jwt && !userInfo) return redirect("/");
  }, []);

  const onSubmit: SubmitHandler<DietMsgType> = async (data) => {
    reset();
    await postUserDietMutation(data.msg);
  };

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
              <DietStateSection />
            </DietStateCard>
          )}

          <ChattingRoom
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            isLoading={isLoading}
            dietResponseData={dietResponseData}
          />
        </VStack>
      </Flex>
    </>
  );
};

export default Page;
