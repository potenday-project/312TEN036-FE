import React from "react";
import MainInput from "../input/MainInput";
import MainButton from "../button/MainButton";
import {
  Box,
  ButtonGroup,
  Flex,
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
}

const UserPhysicForm = ({ setFunnel }: UserPhysicsFormPropsType) => {
  return (
    <Flex flexDir={"column"} w={"90%"} margin={"0 auto"}>
      <Box as="section">
        <Text as={"h2"} color={"#787878"} fontSize={"17px"}>
          거의 다 왔어요!
        </Text>
        <Heading
          as={"h1"}
          color={"#000000"}
          fontSize={"24px"}
          fontWeight={"semibold"}
        >
          신체정보를 입력해주세요
        </Heading>
      </Box>
      <HStack as={"form"} flexDir={"column"} w={"100%"} spacing={5}>
        <FormControl isRequired>
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

        <FormControl isRequired>
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
        <FormControl isRequired>
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
      </HStack>
      <ButtonGroup
        width={"90%"}
        pos={"fixed"}
        bottom={"30px"}
        margin={"0 auto"}
      >
        <MainButton
          w={"100%"}
          h={"52px"}
          onClick={() => setFunnel("userPhysics")}
        >
          다음으로
        </MainButton>
      </ButtonGroup>
    </Flex>
  );
};

export default UserPhysicForm;
