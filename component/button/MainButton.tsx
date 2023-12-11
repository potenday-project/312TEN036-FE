import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

const MainButton = ({
  children,
  w,
  h,
  onClick,
  alignSelf,
  isDisabled,
}: ButtonProps) => {
  return (
    <Button
      bgColor={"#000000"}
      textColor={"white"}
      borderRadius={"12px"}
      w={w}
      h={h}
      maxW={"390px"}
      onClick={onClick}
      alignSelf={alignSelf}
      isDisabled={isDisabled}
    >
      {children}
    </Button>
  );
};

export default MainButton;
