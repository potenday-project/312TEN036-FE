import React from "react";
import MainButton from "../button/MainButton";
import {
  Box,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

interface UserPhysicsFormPropsType {
  setFunnel: React.Dispatch<React.SetStateAction<string>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

const UserPhysicForm = ({
  setFunnel,
  setProgress,
}: UserPhysicsFormPropsType) => {
  return (
    <>
      <Box as="section" alignSelf={"flex-start"}>
        <Heading
          as={"h1"}
          color={"#000000"}
          fontSize={"24px"}
          fontWeight={"semibold"}
        >
          신체정보를 입력해주세요
        </Heading>
        <Text as={"h2"} color={"#787878"} fontSize={"17px"} lineHeight={2}>
          개인 맞춤으로 알려드려요
        </Text>
      </Box>
      <HStack
        as={"form"}
        flexDir={"column"}
        w={"100%"}
        spacing={5}
        padding={"30px 0"}
      >
        <FormControl>
          <FormLabel fontSize={"15px"} color={"#5C5C5C"}>
            나이
          </FormLabel>
          <InputGroup>
            <InputLeftElement color={"#C6C6C6"} h={"48px"}>
              만
            </InputLeftElement>
            <Input type="number" h={"48px"} focusBorderColor={"black"} />
            <InputRightElement color={"#C6C6C6"} h={"48px"}>
              세
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel fontSize={"15px"} color={"#5C5C5C"}>
            키
          </FormLabel>
          <InputGroup>
            <Input type="number" h={"48px"} focusBorderColor={"black"} />
            <InputRightElement color={"#C6C6C6"} h={"48px"}>
              cm
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"15px"} color={"#5C5C5C"}>
            체중
          </FormLabel>
          <InputGroup>
            <Input type="number" h={"48px"} focusBorderColor={"black"} />
            <InputRightElement color={"#C6C6C6"} h={"48px"}>
              kg
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"15px"} color={"#5C5C5C"}>
            목표 체중
          </FormLabel>
          <InputGroup>
            <Input type="number" h={"48px"} focusBorderColor={"black"} />
            <InputRightElement color={"#C6C6C6"} h={"48px"}>
              kg
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </HStack>
      <ButtonGroup
        width={"100%"}
        pos={"absolute"}
        bottom={"30px"}
        margin={"0 auto"}
        justifyContent={"center"}
      >
        <MainButton
          w={"100%"}
          h={"52px"}
          onClick={() => {
            setFunnel("userAgreement");
            setProgress((oldState) => oldState + 33.3);
          }}
        >
          다음으로
        </MainButton>
      </ButtonGroup>
    </>
  );
};

export default UserPhysicForm;
