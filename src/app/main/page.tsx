"use client";
import { Flex } from "@chakra-ui/react";
import ChattingRoom from "../../../component/card/ChattingRoom";
import DietStateCard from "../../../component/card/DietStateCard";

const Page = () => {
  return (
    <>
      <Flex as={"header"}></Flex>
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
        <DietStateCard />
        <ChattingRoom />
      </Flex>
    </>
  );
};

export default Page;
