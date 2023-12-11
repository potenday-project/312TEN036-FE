import { Input, InputProps, border } from "@chakra-ui/react";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface MainInputPropsType extends InputProps {
  register: UseFormRegisterReturn;
}

const MainInput = ({ h, w, placeholder, register }: MainInputPropsType) => {
  return (
    <Input
      h={h}
      w={w}
      border={"1px solid #BCBCBC"}
      borderRadius={"12px"}
      placeholder={placeholder}
      focusBorderColor={"black"}
      {...register}
    />
  );
};

export default MainInput;
