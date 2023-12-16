"use client";
import { Button, ButtonGroup, Text, VStack } from "@chakra-ui/react";
import React from "react";
import NotFoundIcon from "../../component/icon/NotFoundIcon";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <VStack
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
        bgColor={"#2B2C2C"}
      >
        <VStack spacing={"20px"}>
          <NotFoundIcon />
          <Text
            color={"#A6A6A6"}
            textAlign={"center"}
            fontSize={"24px"}
            fontWeight={"semibold"}
          >
            찾을 수 없는 페이지에요
            <br />
            다시 들어와볼까요?
          </Text>
        </VStack>
        <ButtonGroup
          pos={"absolute"}
          bottom={"10vh"}
          padding={"0 22px"}
          gap={"5px"}
        >
          <Button
            w={"166px"}
            h={"52px"}
            bgColor={"#474747"}
            color={"white"}
            onClick={() => router.push("/")}
          >
            메인으로
          </Button>
          <Button
            w={"166px"}
            h={"52px"}
            bgColor={"#40E98E"}
            color={"#2B2C2C"}
            onClick={() => router.back()}
          >
            뒤로가기
          </Button>
        </ButtonGroup>
      </VStack>
    </>
  );
};

export default NotFound;
