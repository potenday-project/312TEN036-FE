"use client";
import { ButtonGroup, Text } from "@chakra-ui/react";
import MainButton from "../button/MainButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginFunnel = () => {
  const router = useRouter();
  return (
    <>
      <Image
        src={"https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"}
        alt="식선생"
        width={100}
        height={100}
      />

      <ButtonGroup
        width={"100%"}
        pos={"fixed"}
        bottom={"30px"}
        padding={"0 22px"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={"10px"}
      >
        <MainButton w={"100%"} h={"52px"} onClick={() => {}}>
          다음으로
        </MainButton>
        <Text
          as={"u"}
          fontSize={"17px"}
          color={"#9D9D9D"}
          margin={"0.5rem"}
          onClick={() => router.push("/signup")}
          cursor={"pointer"}
        >
          체험하기
        </Text>
      </ButtonGroup>
    </>
  );
};

export default LoginFunnel;
