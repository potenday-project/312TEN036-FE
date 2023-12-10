import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

const MainButton = ({ children, w, h }: ButtonProps) => {
  return (
    <Button
      bgColor={"#000000"}
      textColor={"white"}
      borderRadius={"12px"}
      w={w}
      h={h}
    >
      {children}
    </Button>
  );
};

export default MainButton;
