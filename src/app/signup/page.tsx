"use client";
import React, { useState } from "react";
import UserInfoForm from "../../../component/form/UserInfoForm";
import { Flex, Progress } from "@chakra-ui/react";
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
      <Flex
        as={"main"}
        flexDir={"column"}
        w={"100%"}
        h={"99vh"}
        pos={"relative"}
        maxW={"390px"}
        padding={"60px 22px"}
        margin={"0 auto"}
        alignItems={"center"}
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
      </Flex>
    </>
  );
};

export default Page;
