"use client";

import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const TheHeader = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Flex
        as={"header"}
        position={"absolute"}
        top={"0"}
        padding={"4px 22px"}
        w={"100%"}
        h={"52px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {children}
      </Flex>
    </>
  );
};

export default TheHeader;
