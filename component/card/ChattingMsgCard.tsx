import { Box, Card, CardBody, CardProps } from "@chakra-ui/react";
import { Children } from "react";

const ChattingMsgCard = ({ children }: CardProps) => {
  return (
    <>
      <Card
        bgColor={"#F5F5F9"}
        width={"max-content"}
        shadow={"none"}
        margin={"10px 0px 10px 22px"}
      >
        <CardBody
          color={"#2F2F2F"}
          padding={"14px 16px"}
          width={"max-content"}
          maxW={"346px"}
          fontSize={"18px"}
        >
          {children}
        </CardBody>
      </Card>
    </>
  );
};

export default ChattingMsgCard;
