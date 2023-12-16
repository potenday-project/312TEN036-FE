"use client";
import { Flex, useColorMode } from "@chakra-ui/react";
import { useFunnel } from "../../utils/hooks/useFunnel";
import MainFunnel from "../../component/Funnel/MainFunnel";
import LoginFunnel from "../../component/Funnel/LoginFunnel";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { colorMode, setColorMode } = useColorMode();
  const { funnel, setFunnel } = useFunnel("main");

  useEffect(() => {
    if (colorMode === "dark") {
      setColorMode("light");
    }
    const jwt = localStorage.getItem("jwt");
    if (jwt) return router.push("/main");
  }, [colorMode, setColorMode, router]);

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
      alignItems={"center"}
      bgColor={"#2B2C2C"}
    >
      {funnel === "main" && <MainFunnel setFunnel={setFunnel} />}
      {funnel === "login" && <LoginFunnel />}
    </Flex>
  );
}
