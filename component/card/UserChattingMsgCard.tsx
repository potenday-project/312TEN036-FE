import { Box, Card, CardBody, CardProps } from "@chakra-ui/react";

const UserChattingMsgCard = ({ children }: CardProps) => {
  return (
    <>
      <Card
        bgColor={"#F5F5F9"}
        width={"max-content"}
        shadow={"none"}
        margin={"0px 22px 0px 0px"}
        float={"right"}
        fontSize={"18px"}
        alignSelf={"flex-end"}
      >
        <CardBody
          color={"#2F2F2F"}
          padding={"14px 16px"}
          width={"max-content"}
          maxW={"320px"}
        >
          {children}
        </CardBody>
      </Card>
    </>
  );
};

export default UserChattingMsgCard;
