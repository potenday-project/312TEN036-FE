import { useState } from "react";

export const useFunnel = (state: string) => {
  const [funnel, setFunnel] = useState(state);

  return { funnel, setFunnel };
};
