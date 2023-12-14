import React from "react";
import { redirect } from "next/navigation";
import SignupTemplate from "../../../component/template/SignupTemplate";
import { postKakaoCode } from "../../../utils/API/AxiosSetting";

const Page = ({
  searchParams,
}: {
  searchParams: { code: string; error: string };
}) => {
  const kakaoCode = searchParams.code;

  const errorCode = searchParams.error;
  if (errorCode) return redirect("/");
  postKakaoCode(kakaoCode);

  return <SignupTemplate />;
};

export default Page;
