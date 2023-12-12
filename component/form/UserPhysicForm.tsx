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
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface UserPhysicsFormPropsType {
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}
interface PhysicsFormType {
  age: number;
  height: number;
  weight: number;
  targetWeight: number;
}

const UserPhysicForm = () => {
  const router = useRouter();
  const { handleSubmit, register } = useForm<PhysicsFormType>();

  const onSubmit: SubmitHandler<PhysicsFormType> = (data) => {
    console.log(data);
    // setProgress((oldState) => oldState + 33.3);
    router.push("/main");
  };
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
        onSubmit={handleSubmit(onSubmit)}
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
            <Input
              {...register("age", { required: true })}
              type="number"
              h={"48px"}
              focusBorderColor={"black"}
            />
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
            <Input
              {...register("height", { required: true })}
              type="number"
              h={"48px"}
              focusBorderColor={"black"}
            />
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
            <Input
              {...register("weight", { required: true })}
              type="number"
              h={"48px"}
              focusBorderColor={"black"}
            />
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
            <Input
              {...register("targetWeight", { required: true })}
              type="number"
              h={"48px"}
              focusBorderColor={"black"}
            />
            <InputRightElement color={"#C6C6C6"} h={"48px"}>
              kg
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <ButtonGroup
          width={"100%"}
          pos={"absolute"}
          bottom={"30px"}
          margin={"0 auto"}
          justifyContent={"center"}
        >
          <MainButton w={"100%"} h={"52px"} type="submit">
            다음으로
          </MainButton>
        </ButtonGroup>
      </HStack>
    </>
  );
};

export default UserPhysicForm;
