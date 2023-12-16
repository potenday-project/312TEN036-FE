import React from "react";
import { redirect } from "next/navigation";
import SignupTemplate from "../../../component/template/SignupTemplate";
import { postKakaoCode } from "../../../utils/api/AxiosSetting";

export interface JwtToken {
  jwt: string;
  token_type: string;
}

const Page = async ({
  searchParams,
}: {
  searchParams: { code: string; error: string };
}) => {
  const kakaoCode = searchParams.code;

  const errorCode = searchParams.error;
  console.log("data :", kakaoCode, errorCode);
  if (errorCode) return redirect("/");

  const jwtToken: JwtToken = await postKakaoCode(kakaoCode);

  console.log(jwtToken);

  return <SignupTemplate jwtToken={jwtToken} />;
};

export default Page;
