import { useState } from "react";

export const useFunnel = () => {
  const [funnel, setFunnel] = useState("userInfo");

  return { funnel, setFunnel };
};
