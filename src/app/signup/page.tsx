import React from "react";

import { redirect } from "next/navigation";
import SignupTemplate from "../../../component/template/SignupTemplate";
import { postKakaoCode } from "../../../utils/api/AxiosSetting";

const Page = ({
  searchParams,
}: {
  searchParams: { code: string; error: string };
}) => {
  const kakaoCode = searchParams.code;

  const errorCode = searchParams.error;
  postKakaoCode(kakaoCode);
  if (errorCode) return redirect("/");

  return <SignupTemplate />;
};

export default Page;
