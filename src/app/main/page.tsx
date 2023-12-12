"use client";
import { Flex, Text } from "@chakra-ui/react";
import ChattingRoom from "../../../component/card/ChattingRoom";
import DietStateCard from "../../../component/card/DietStateCard";
import { useRouter } from "next/navigation";

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
        bgColor={"#D9D9D9"}
        alignItems={"center"}
      >
        <Flex
          as={"header"}
          position={"fixed"}
          top={"0"}
          justifyContent={"space-between"}
          padding={"4px 22px"}
          bgColor={"#D9D9D9"}
          w={"100%"}
        >
          <Text>로고</Text>
          <Text onClick={() => router.push("/mypage")} cursor={"pointer"}>
            마이페이지
          </Text>
        </Flex>
        <DietStateCard />
        <ChattingRoom />
      </Flex>
    </>
  );
};

export default Page;
