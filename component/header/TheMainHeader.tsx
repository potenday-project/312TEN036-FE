"use client";

import { Flex, Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import TextLogoIcon from "../icon/TextLogoIcon";
import UserIcon from "../icon/UserIcon";

const TheMainHeader = () => {
  const path = usePathname();
  const router = useRouter();

  return (
    <>
      {path === "/main" && (
        <Flex
          as={"header"}
          position={"absolute"}
          top={"0"}
          padding={"4px 22px"}
          w={"100%"}
          h={"52px"}
          alignItems={"center"}
          justifyContent={"space-between"}
          zIndex={1000}
        >
          <TextLogoIcon />
          <Text onClick={() => router.push("/mypage")} cursor={"pointer"}>
            <UserIcon />
          </Text>
        </Flex>
      )}
    </>
  );
};

export default TheMainHeader;
