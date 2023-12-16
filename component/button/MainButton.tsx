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
  bgColor,
  color,
  _disabled,
  _hover,
  isLoading,
}: ButtonProps) => {
  return (
    <Button
      bgColor={bgColor}
      color={color}
      textColor={"white"}
      borderRadius={"12px"}
      w={w}
      h={h}
      maxW={"390px"}
      onClick={onClick}
      alignSelf={alignSelf}
      isDisabled={isDisabled}
      type={type}
      _disabled={_disabled}
      _hover={_hover}
      isLoading={isLoading}
    >
      {children}
    </Button>
  );
};

export default MainButton;
