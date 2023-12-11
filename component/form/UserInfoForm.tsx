"use client";
import {
  Box,
  Button,
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
        borderRadius={"12px"}
        border={"1px solid #BCBCBC"}
        fontSize={"15px"}
        fontWeight={"semibold"}
        color={"#C6C6C6"}
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
      <Box as="section" alignSelf={"flex-start"}>
        <Heading
          as={"h1"}
          color={"#000000"}
          fontSize={"24px"}
          fontWeight={"semibold"}
        >
          기본정보를 입력해주세요
        </Heading>
        <Text as={"h2"} color={"#787878"} fontSize={"17px"} lineHeight={2}>
          성별에 맞는 대사량기준으로 알려드려요
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
            이름
          </FormLabel>
          <MainInput placeholder="이름을 입력해주세요." w={"100%"} h={"48px"} />
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
            setFunnel("userPhysics");
            setProgress((oldState) => oldState + 33.3);
          }}
        >
          다음으로
        </MainButton>
      </ButtonGroup>
    </>
  );
};
export default UserInfoForm;
