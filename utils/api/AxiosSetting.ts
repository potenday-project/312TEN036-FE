import axios from "axios";
import { UserInfoType } from "../../component/template/SignupTemplate";
import { redirect } from "next/navigation";
import { UserPostDietData } from "@/app/main/page";

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
  const userId = localStorage.getItem(`userId`);
  const res = await instacne.get(`/users/${userId}`);
  return res;
};

export const getUserBmr = async () => {
  const userId = localStorage.getItem(`userId`);
  const res = await instacne.get(`/users/${userId}/bmr`);
  return res;
};

export const postKakaoCode = async (code: string) => {
  if (!code) {
    return null;
  } else {
    try {
      const res = await instacne.post(`/auth`, { code });
      return res.data;
    } catch (err) {
      return redirect("/");
    }
  }
};

export const postUserInfo = async (userInfo: UserInfoType) => {
  const res = await instacne.post("/users", userInfo);
  return res.data;
};

export const postUserDiet = async (postDietData: UserPostDietData) => {
  const res = await instacne.post(`/users/diet-exercise-advice`, postDietData);

  const data: DietResponse = await res.data;
  return res.data;
};
