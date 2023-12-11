"use client";
import { Flex } from "@chakra-ui/react";
import { useFunnel } from "../../utils/hooks/useFunnel";
import MainFunnel from "../../component/Funnel/MainFunnel";
import LoginFunnel from "../../component/Funnel/LoginFunnel";

export default function Home() {
  const { funnel, setFunnel } = useFunnel("main");
  return (
    <Flex
      as={"main"}
      flexDir={"column"}
      w={"90%"}
      height={"100vh"}
      margin={"0 auto"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {funnel === "main" && <MainFunnel setFunnel={setFunnel} />}
      {funnel === "login" && <LoginFunnel />}
    </Flex>
  );
}
