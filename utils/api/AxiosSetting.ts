import axios from "axios";
import { UserInfoType } from "../../component/template/SignupTemplate";

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
  const res = await instacne.get("");
  console.log(res);
  return res;
};

export const postKakaoCode = async (code: string) => {
  const res = await instacne.post(`/auth`, { code });

  console.log(res.data);
  return res.data;
};

export const postUserInfo = async (userInfo: UserInfoType) => {
  const jwtToken = localStorage.getItem(`jwt`);
  console.log(jwtToken);

  const res = await instacne.post("", userInfo, {
    headers: { Authorization: `Bearer ${jwtToken}` },
  });

  return res.data;
};

export const postUserDiet = async (diet: Object) => {
  const query = {
    ["query"]: diet,
  };
  const res = await instacne.post("/users/6/diet-exercise-advice", query);
  const data: DietResponse = res.data;
  return data;
};
