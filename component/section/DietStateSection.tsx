import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import mainStage1 from "../../utils/img/mainStage1.png";
import mainStage2 from "../../utils/img/mainStage2.png";
import mainStage3 from "../../utils/img/mainStage3.png";
import mainStage4 from "../../utils/img/mainStage4.png";
import mainStage5 from "../../utils/img/mainStage5.png";

const DietStateSection = () => {
  const dietNickName = {
    stage1: "열정가득 다이어터",
    stage2: "기세등등 유지어터",
    stage3: "휴식중인 유지어터",
    stage4: "방신한 다이어터",
    stage5: "위기의 다이어터",
  };
  return (
    <HStack
      display={"flex"}
      margin={"0 auto"}
      w={"100%"}
      alignItems={"flex-end"}
    >
      <Box w={"100%"}>
        <Text fontSize={"16px"} color={"#787878"}>
          200Kcal 초과
        </Text>
        <Heading fontSize={"22px"}>
          오늘{" "}
          <Text as={"a"} color={"#40E98E"}>
            30분 이상 달려야
          </Text>
          <br />
          현재 몸무게 안정권 유지
        </Heading>
      </Box>
      <VStack spacing={"-3px"}>
        <Card bgColor={"#434343"} margin={"0 auto"}>
          <CardBody padding={"4px 7px"}>
            <Text color={"#40E98E"} textAlign={"center"} fontSize={"9px"}>
              열정가득 다이어터
            </Text>
          </CardBody>
        </Card>
        <Image
          src={mainStage1}
          alt="메인 캐릭터"
          placeholder="blur"
          style={{ width: "130px", height: "auto" }}
          quality={100}
        />
      </VStack>
    </HStack>
  );
};

export default DietStateSection;
