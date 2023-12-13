import { useMutation } from "@tanstack/react-query";
import { postUserInfo } from "../api/AxiosSetting";

export const usePostUserInfo = () => {
  const {
    data,
    mutateAsync: postUserInfoMutation,
    isLoading,
  } = useMutation({
    mutationFn: () => postUserInfo(),
    onError: () => {},
    onSuccess: () => {},
  });

  return { data, postUserInfoMutation, isLoading };
};
