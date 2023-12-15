"use client";
import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import ChattingInputArrowIcon from "../icon/ChattingInputArrowIcon";
import CircleIcon from "../icon/CircleIcon";
import { usePostUserDiet } from "../../utils/hooks/usePostUserDiet";
import { SubmitHandler, useForm } from "react-hook-form";

interface DietMsgType {
  msg: string;
}
const ChattingInput = () => {
  const { postUserDietMutation } = usePostUserDiet();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<DietMsgType>();

  const onSubmit: SubmitHandler<DietMsgType> = async (data) => {
    reset();
    await postUserDietMutation(data.msg);
  };

  return (
    <>
      <Flex
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
        position={"fixed"}
        bottom={"0px"}
        bgColor={"#F4F4F4"}
        w={"100%"}
        maxW={"390px"}
        padding={"10px 22px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <InputGroup w={"100%"} bgColor={"#FFFFFF"} borderRadius={"12px"}>
          <Input
            {...register("msg", { required: true })}
            borderRadius={"12px"}
            border={"1px solid #D4D4D4"}
            placeholder="답변을 입력해주세요"
            fontSize={"16px"}
            h={"50px"}
            focusBorderColor={"#00C27C"}
            color={"#00C27C"}
          />
          <InputRightElement
            as={"button"}
            type="submit"
            cursor={"pointer"}
            marginRight={"5px"}
            h={"50px"}
          >
            <ChattingInputArrowIcon />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </>
  );
};

export default ChattingInput;
