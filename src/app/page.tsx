"use client";
import { Flex, useColorMode } from "@chakra-ui/react";
import { useFunnel } from "../../utils/hooks/useFunnel";
import MainFunnel from "../../component/Funnel/MainFunnel";
import LoginFunnel from "../../component/Funnel/LoginFunnel";
import { useEffect } from "react";

export default function Home() {
  const { funnel, setFunnel } = useFunnel("main");

  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") {
      setColorMode("light");
    }
  }, [colorMode, setColorMode]);

  return (
    <Flex
      as={"main"}
      flexDir={"column"}
      w={"100%"}
      pos={"relative"}
      maxW={"390px"}
      height={"100vh"}
      padding={"60px 22px"}
      margin={"0 auto"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {funnel === "main" && <MainFunnel setFunnel={setFunnel} />}
      {funnel === "login" && <LoginFunnel />}
    </Flex>
  );
}
