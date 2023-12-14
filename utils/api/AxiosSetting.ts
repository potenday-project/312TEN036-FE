import axios from "axios";

const instacne = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const getUserInfo = async () => {
  const res = await instacne.get("");

  console.log(res);
  return res;
};

export const postKakaoCode = async (code: string) => {
  const res = await instacne.post(`/user`, code);
  return res.data;
};

export const postUserInfo = async () => {
  const res = await instacne.post("");
  return res.data;
};

export const postUserDiet = async () => {
  const res = await instacne.post("");
  return res.data;
};
