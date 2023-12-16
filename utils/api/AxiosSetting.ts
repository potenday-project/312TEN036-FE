import axios from "axios";
import { UserInfoType } from "../../component/template/SignupTemplate";
import { redirect } from "next/navigation";

const instacne = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface DietResponse {
  아침: string;
  점심: string;
  저녁: string;
  초과칼로리: string;
  운동필요시간: string;
  잔소리: string;
}

export const getUserInfo = async () => {
  const jwtToken = localStorage.getItem(`jwt`);
  const res = await instacne.get("/users", {
    headers: { Authorization: `Bearer ${jwtToken}` },
  });
  return res;
};

export const postKakaoCode = async (code: string) => {
  try {
    const res = await instacne.post(`/auth`, { code });
    return res.data;
  } catch (err) {
    return redirect("/");
  }
};

export const postUserInfo = async (userInfo: UserInfoType) => {
  const jwtToken = localStorage.getItem(`jwt`);
  console.log(jwtToken);
  const res = await instacne.post("/users", userInfo, {
    headers: { Authorization: `Bearer ${jwtToken}` },
  });
  return res.data;
};

export const postUserDiet = async (diet: Object) => {
  const query = {
    ["query"]: diet,
  };
  const res = await instacne.post("/users/8/diet-exercise-advice", query);
  const data: DietResponse = res.data;
  return data;
};
