"use client";
import React, { useState } from "react";
import UserInfoForm from "../../../component/form/UserInfoForm";
import { Box, Progress, extendTheme } from "@chakra-ui/react";
import { useFunnel } from "../../../utils/hooks/useFunnel";
import UserPhysicForm from "../../../component/form/UserPhysicForm";

const Page = () => {
  const [progress, setProgress] = useState<number>(30);
  const { funnel, setFunnel } = useFunnel();
  return (
    <>
      <Progress
        bgColor={"#D9D9D9"}
        // colorScheme="black"
        size="sm"
        value={progress}
      />
      <Box width={"100%"} h={"100%"}>
        {funnel === "userInfo" && <UserInfoForm setFunnel={setFunnel} />}
        {funnel === "userPhysics" && <UserPhysicForm setFunnel={setFunnel} />}
      </Box>
    </>
  );
};

export default Page;
