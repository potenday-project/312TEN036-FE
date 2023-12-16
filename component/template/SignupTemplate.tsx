"use client";

import { Flex, Progress } from "@chakra-ui/react";
import { useState } from "react";
import { useFunnel } from "../../utils/hooks/useFunnel";
import UserAgreementForm from "../form/UserAgreementForm";
import UserInfoForm from "../form/UserInfoForm";
import UserPhysicForm from "../form/UserPhysicForm";
import { JwtToken } from "@/app/signup/page";

export interface UserInfoType {
  userName: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  targetWeight: number;
}

const SignupTemplate = ({ jwtToken }: { jwtToken: JwtToken }) => {
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

  localStorage.setItem(`jwt`, jwtToken.jwt);

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
        h={"100vh"}
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
        {funnel === "userPhysics" && <UserPhysicForm userInfo={userInfo} />}
      </Flex>
    </>
  );
};

export default SignupTemplate;
