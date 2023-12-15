"use client";
import { Box, ButtonGroup, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import KaKaoButtonIcon from "../icon/KaKaoButtonIcon";

const LoginFunnel = () => {
  const router = useRouter();

  const Rest_api_key = "536cb646ce60d71102dc92d2b7845c8d"; //REST API KEY
  const redirect_uri = "http://localhost:3000/signup"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const signUpKakaoHandler = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <Text>우리의 식단 선생님</Text>
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
        <Box onClick={() => signUpKakaoHandler()} cursor={"pointer"}>
          <KaKaoButtonIcon />
        </Box>

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
