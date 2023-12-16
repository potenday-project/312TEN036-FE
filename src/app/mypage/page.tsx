"use client";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import TodayReportCard from "../../../component/card/TodayReportCard";
import TheHeader from "../../../component/header/TheHeader";
import { useUser } from "../../../utils/hooks/useUser";
import CloseIcon from "../../../component/icon/CloseIcon";
import Image from "next/image";
import MyPageCharacter from "../../../utils/img/MypageCharacter.png";
import { useEffect, useState } from "react";
import { UserInfoType } from "../../../component/template/SignupTemplate";
import MyPageTemplate from "../../../component/template/MyPageTemplate";

const Page = () => {
  const { data } = useUser();

  // const [userData, setUserData] = useState<UserInfoType>();

  // useEffect(() => {
  //   let userInfo = localStorage.getItem("userInfo");
  //   if (userInfo !== null) {
  //     const userParsing: UserInfoType = JSON.parse(userInfo);
  //     setUserData(userParsing);
  //   }
  // }, [setUserData]);

  return <MyPageTemplate />;
};

export default Page;
