"use client";
import { Box, ButtonGroup, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import MainButton from "../../component/button/MainButton";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface MainFunnelPropsType {
  setFunnel: Dispatch<SetStateAction<string>>;
}

const MainFunnel = ({ setFunnel }: MainFunnelPropsType) => {
  const router = useRouter();

  return (
    <>
      <Image
        src={"https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"}
        alt="식선생"
        width={100}
        height={100}
      />
      <Box as="section" paddingBottom={"100px"}>
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
          필요 운동량과 안찌는 식단을 한번에 알려드려요
        </Text>
      </Box>

      <ButtonGroup
        width={"90%"}
        pos={"fixed"}
        bottom={"30px"}
        margin={"0 auto"}
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
