import { Box, ButtonGroup, Flex, Heading, RadioGroup } from "@chakra-ui/react";
import React from "react";
import MainButton from "../button/MainButton";

interface UserAgreementFormPropsType {
  setFunnel: React.Dispatch<React.SetStateAction<string>>;
}

const UserAgreementForm = ({ setFunnel }: UserAgreementFormPropsType) => {
  return (
    <Flex flexDir={"column"} w={"90%"} margin={"0 auto"}>
      <Box as="section">
        <Heading
          as={"h1"}
          color={"#000000"}
          fontSize={"24px"}
          fontWeight={"semibold"}
        >
          서비스를 이용하시려면
          <br />
          약관 동의가 필요해요.
        </Heading>
      </Box>

      <ButtonGroup
        width={"90%"}
        pos={"fixed"}
        bottom={"30px"}
        margin={"0 auto"}
      >
        <MainButton w={"100%"} h={"52px"}>
          동의하고 시작하기
        </MainButton>
      </ButtonGroup>
    </Flex>
  );
};

export default UserAgreementForm;
