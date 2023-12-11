"use client";
import React, { useState } from "react";
import UserInfoForm from "../../../component/form/UserInfoForm";
import { Box, Progress, extendTheme } from "@chakra-ui/react";
import { useFunnel } from "../../../utils/hooks/useFunnel";
import UserPhysicForm from "../../../component/form/UserPhysicForm";
import UserAgreementForm from "../../../component/form/UserAgreementForm";

const Page = () => {
  const [progress, setProgress] = useState<number>(33.3);
  const { funnel, setFunnel } = useFunnel("userInfo");
  return (
    <>
      <Progress
        bgColor={"#D9D9D9"}
        // colorScheme="black"
        size="xs"
        isAnimated={true}
        value={progress}
      />
      <Box
        width={"100%"}
        h={"100%"}
        maxW={"390px"}
        padding={"70px 0px"}
        margin={"0 auto"}
      >
        {funnel === "userInfo" && (
          <UserInfoForm setFunnel={setFunnel} setProgress={setProgress} />
        )}
        {funnel === "userPhysics" && (
          <UserPhysicForm setFunnel={setFunnel} setProgress={setProgress} />
        )}
        {funnel === "userAgreement" && (
          <UserAgreementForm setFunnel={setFunnel} />
        )}
      </Box>
    </>
  );
};

export default Page;
