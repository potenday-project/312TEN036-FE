import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

const MainButton = ({
  children,
  w,
  h,
  onClick,
  alignSelf,
  isDisabled,
  type,
}: ButtonProps) => {
  return (
    <Button
      bgColor={"#000000"}
      textColor={"white"}
      borderRadius={"12px"}
      margin={"0 22px"}
      w={w}
      h={h}
      maxW={"390px"}
      onClick={onClick}
      alignSelf={alignSelf}
      isDisabled={isDisabled}
      type={type}
    >
      {children}
    </Button>
  );
};

export default MainButton;
