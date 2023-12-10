import { Input, InputProps, border } from "@chakra-ui/react";
import React from "react";

const MainInput = ({ h, w, border, borderRadius }: InputProps) => {
  return <Input h={h} w={w} border={border} borderRadius={borderRadius} />;
};

export default MainInput;
