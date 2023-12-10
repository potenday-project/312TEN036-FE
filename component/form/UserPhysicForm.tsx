import { ButtonGroup, Flex } from "@chakra-ui/react";
import React from "react";
import MainInput from "../input/MainInput";
import MainButton from "../button/MainButton";

const UserPhysicForm = () => {
  return (
    <Flex as={"form"} flexDir={"column"}>
      <MainInput w={"100%"} />
      <ButtonGroup>
        <MainButton>다음으로</MainButton>
      </ButtonGroup>
    </Flex>
  );
};

export default UserPhysicForm;
