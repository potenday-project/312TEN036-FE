import { useState } from "react";

export const useFunnel = () => {
  const [funnel, setFunnel] = useState();

  return { funnel, setFunnel };
};
