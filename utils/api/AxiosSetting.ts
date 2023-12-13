import axios from "axios";

const instacne = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const getUserInfo = async () => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const res = await instacne.get("");

  console.log(res);
  return res;
};

export const postUserInfo = async () => {
  const res = await instacne.post("");
  return res.data;
};

export const postUserDiet = async () => {
  const res = await instacne.post("");
  return res.data;
};
