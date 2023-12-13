import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import ChattingInputArrowIcon from "../icon/ChattingInputArrowIcon";
import CircleIcon from "../icon/CircleIcon";

const ChattingInput = () => {
  return (
    <>
      <Flex
        position={"fixed"}
        bottom={"0px"}
        bgColor={"white"}
        w={"100%"}
        padding={"10px 22px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <CircleIcon />
        <InputGroup w={"304px"}>
          <Input
            borderRadius={"12px"}
            border={"1px solid #D4D4D4"}
            placeholder="답변을 입력해주세요"
            fontSize={"16px"}
            h={"50px"}
          />
          <InputRightElement
            cursor={"pointer"}
            onClick={() => console.log(1)}
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
