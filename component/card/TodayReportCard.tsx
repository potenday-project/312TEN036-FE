import { Card, CardBody, CardProps } from "@chakra-ui/react";

const TodayReportCard = ({ children, bgColor }: CardProps) => {
  return (
    <>
      <Card bgColor={bgColor} width={"max-content"} shadow={"none"} w={"100%"}>
        <CardBody
          color={"#FFFFFF"}
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

export default TodayReportCard;
