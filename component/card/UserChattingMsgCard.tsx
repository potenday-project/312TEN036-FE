import { Box, Card, CardBody, CardProps } from "@chakra-ui/react";

const UserChattingMsgCard = ({ children }: CardProps) => {
  return (
    <>
      <Card
        bgColor={"#00CE84"}
        width={"max-content"}
        shadow={"none"}
        margin={"0px 22px 0px 0px"}
        float={"right"}
        fontSize={"18px"}
        alignSelf={"flex-end"}
      >
        <CardBody
          maxW={"275px"}
          color={"#FFFFFF"}
          padding={"14px 16px"}
          width={"max-content"}
        >
          {children}
        </CardBody>
      </Card>
    </>
  );
};

export default UserChattingMsgCard;
