"use client";
import React, { useState } from "react";
import UserInfoForm from "../../../component/form/UserInfoForm";
import { Flex, Progress } from "@chakra-ui/react";
import { useFunnel } from "../../../utils/hooks/useFunnel";
import UserPhysicForm from "../../../component/form/UserPhysicForm";
import UserAgreementForm from "../../../component/form/UserAgreementForm";

export interface UserInfoType {
  userName: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  targetWeight: number;
}

const Page = () => {
  const [progress, setProgress] = useState<number>(33.3);
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    userName: "",
    gender: "",
    age: 0,
    height: 0,
    weight: 0,
    targetWeight: 0,
  });
  const { funnel, setFunnel } = useFunnel("userAgreement");

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
        flexDir={"column"}
        w={"100%"}
        h={"99vh"}
        pos={"relative"}
        maxW={"390px"}
        padding={"60px 22px"}
        margin={"0 auto"}
        alignItems={"center"}
      >
        {funnel === "userAgreement" && (
          <UserAgreementForm setFunnel={setFunnel} setProgress={setProgress} />
        )}
        {funnel === "userInfo" && (
          <UserInfoForm
            setFunnel={setFunnel}
            setProgress={setProgress}
            setUserInfo={setUserInfo}
          />
        )}
        {funnel === "userPhysics" && <UserPhysicForm />}
      </Flex>
    </>
  );
};

export default Page;
