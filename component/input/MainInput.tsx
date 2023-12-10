import { Input, InputProps, border } from "@chakra-ui/react";
import React from "react";

const MainInput = ({ h, w, placeholder }: InputProps) => {
  return (
    <Input
      h={h}
      w={w}
      border={"1px solid #BCBCBC"}
      borderRadius={"12px"}
      placeholder={placeholder}
      focusBorderColor={"black"}
    />
  );
};

export default MainInput;
