import { useMutation } from "@tanstack/react-query";
import { postUserInfo } from "../api/AxiosSetting";
import { UserInfoType } from "../../component/template/SignupTemplate";

export const usePostUserInfo = () => {
  const {
    data,
    mutateAsync: postUserInfoMutation,
    isLoading,
  } = useMutation({
    mutationFn: (userInfo: UserInfoType) => postUserInfo(userInfo),
    onError: () => {},
    onSuccess: () => {},
  });

  return { data, postUserInfoMutation, isLoading };
};
