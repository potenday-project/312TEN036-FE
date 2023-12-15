import axios from "axios";

const instacne = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
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

export const postUserDiet = async (diet: Object) => {
  const query = {
    ["query"]: diet,
  };
  const res = await instacne.post("/users/6/diet-exercise-advice", query);
  return res.data;
};
