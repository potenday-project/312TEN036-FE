"use client";
import { Box, ButtonGroup, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import MainButton from "../../component/button/MainButton";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface MainFunnelPropsType {
  setFunnel: Dispatch<SetStateAction<string>>;
}

const MainFunnel = ({ setFunnel }: MainFunnelPropsType) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);

  return (
    <>
      <Image
        src={
          "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?cs=srgb&dl=pexels-mohamed-almari-1485894.jpg&fm=jpg"
        }
        alt="식선생"
        width={100}
        height={100}
      />
      <VStack spacing={"16px"} as="section" paddingBottom={"100px"}>
        <Heading
          as={"h1"}
          color={"#000000"}
          fontSize={"24px"}
          fontWeight={"semibold"}
          textAlign={"center"}
          lineHeight={10}
          padding={"15px"}
        >
          살빼려면
          <br />
          오늘 얼마만큼 운동해야하지?
        </Heading>
        <Text
          as={"h2"}
          color={"#787878"}
          fontSize={"17px"}
          textAlign={"center"}
          lineHeight={7}
        >
          오늘 먹은 음식을 식선생에게 외쳐보세요! <br />
          <Text as={"a"} color={"#636363"} fontWeight={"semibold"}>
            필요 운동량
          </Text>
          과&nbsp;
          <Text as={"a"} color={"#636363"} fontWeight={"semibold"}>
            안찌는 식단
          </Text>
          을 한번에 알려드려요
        </Text>
      </VStack>

      <ButtonGroup
        width={"100%"}
        pos={"fixed"}
        bottom={"30px"}
        margin={"0 auto"}
        justifyContent={"center"}
      >
        <MainButton
          w={"100%"}
          h={"52px"}
          onClick={() => {
            setFunnel("login");
          }}
        >
          다음으로
        </MainButton>
      </ButtonGroup>
    </>
  );
};

export default MainFunnel;
