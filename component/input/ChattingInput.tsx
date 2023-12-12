import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const ChattingInput = () => {
  return (
    <>
      <Flex
        position={"fixed"}
        bottom={"10px"}
        w={"100%"}
        padding={"0 22px"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box bgColor={"black"} w={"28px"} h={"28px"}></Box>
        <InputGroup w={"304px"}>
          <Input
            borderRadius={"12px"}
            border={"1px solid #D4D4D4"}
            placeholder="답변을 입력해주세요"
            fontSize={"16px"}
            h={"50px"}
          />
          <InputRightElement paddingRight={"15px"} h={"50px"}>
            icon
          </InputRightElement>
        </InputGroup>
      </Flex>
    </>
  );
};

export default ChattingInput;
