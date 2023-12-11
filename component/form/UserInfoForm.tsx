"use client";
import { useForm } from "react-hook-form";
import {
  Box,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import MainInput from "../input/MainInput";
import MainButton from "../button/MainButton";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" w={"100%"} textAlign={"center"}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        fontSize={"15px"}
        fontWeight={"semibold"}
        boxShadow="md"
        _checked={{
          bg: "#000000",
          color: "white",
          borderColor: "#000000",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

interface UserInfoFormPropsType {
  setFunnel: React.Dispatch<React.SetStateAction<string>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

const UserInfoForm = ({ setFunnel, setProgress }: UserInfoFormPropsType) => {
  const options = ["남성", "여성"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "gender",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <>
      <Flex flexDir={"column"} w={"90%"} margin={"0 auto"}>
        <Box as="section">
          <Text as={"h2"} color={"#787878"} fontSize={"17px"}>
            반가워요!
          </Text>
          <Heading
            as={"h1"}
            color={"#000000"}
            fontSize={"24px"}
            fontWeight={"semibold"}
          >
            기본정보를 입력해주세요
          </Heading>
        </Box>
        <HStack as={"form"} flexDir={"column"} w={"100%"} spacing={5}>
          <FormControl isRequired>
            <FormLabel fontSize={"15px"} color={"#5C5C5C"}>
              이름
            </FormLabel>
            <MainInput
              placeholder="이름을 입력해주세요."
              w={"100%"}
              h={"48px"}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"15px"} color={"#5C5C5C"}>
              성별
            </FormLabel>
            <HStack {...group}>
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                );
              })}
            </HStack>
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
            onClick={() => {
              setFunnel("userPhysics");
              setProgress((oldState) => oldState + 33.3);
            }}
          >
            다음으로
          </MainButton>
        </ButtonGroup>
      </Flex>
    </>
  );
};
export default UserInfoForm;
