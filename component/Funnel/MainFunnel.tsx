"use client";
import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import MainButton from "../../component/button/MainButton";
import { Dispatch, SetStateAction } from "react";
import MainPageDiet from "../../utils/img/MainPageDiet.png";
import TextLogoIcon from "../icon/TextLogoIcon";

interface MainFunnelPropsType {
  setFunnel: Dispatch<SetStateAction<string>>;
}

const MainFunnel = ({ setFunnel }: MainFunnelPropsType) => {
  return (
    <>
      <VStack
        w={"#100%"}
        h={"100%"}
        spacing={"16px"}
        as="section"
        justifyContent={"center"}
      >
        <Heading
          as={"h1"}
          color={"#FFFFFF"}
          fontSize={"24px"}
          fontWeight={"semibold"}
          textAlign={"center"}
          lineHeight={10}
          padding={"0px"}
          w={"325px"}
        >
          <Flex display={"inline-block"}>
            <TextLogoIcon />
          </Flex>
          &nbsp;에게 식단 알리고
          <br />
          <Text as={"a"} color={"#40E98E"} fontWeight={"semibold"}>
            운동량
          </Text>
          과&nbsp;
          <Text as={"a"} color={"#40E98E"} fontWeight={"semibold"}>
            안찌는 식단
          </Text>
          을 추천 받자!
        </Heading>

        <VStack spacing={"1px"} marginTop={"55px"}>
          <Card bgColor={"#FFFFFF20"}>
            <CardBody textAlign={"center"} color={"#D2D2D2"}>
              나.. 오늘 얼마나 먹었더라?
              <br />안 찌려면 얼마만큼 운동해야하지?
            </CardBody>
          </Card>
          <Image
            src={MainPageDiet}
            alt="식선생"
            placeholder="blur"
            style={{ width: "100%", height: "auto" }}
            quality={100}
          />
        </VStack>
        <ButtonGroup
          width={"100%"}
          pos={"absolute"}
          bottom={"4vh"}
          padding={"0 22px"}
          justifyContent={"center"}
        >
          <MainButton
            w={"100%"}
            h={"52px"}
            bgColor={"#40E98E"}
            onClick={() => {
              setFunnel("login");
            }}
          >
            <Text color={"#2B2C2C"}>다음으로</Text>
          </MainButton>
        </ButtonGroup>
      </VStack>
    </>
  );
};

export default MainFunnel;
