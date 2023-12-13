import { useQuery } from "@tanstack/react-query";

import { getUserInfo } from "../api/AxiosSetting";

export const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => getUserInfo(),
  });

  return { data, isLoading };
};
