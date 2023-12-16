import { useMutation } from "@tanstack/react-query";
import { postUserDiet } from "../api/AxiosSetting";
import { UserPostDietData } from "@/app/main/page";

export const usePostUserDiet = () => {
  const {
    data,
    mutateAsync: postUserDietMutation,
    isLoading,
  } = useMutation({
    mutationFn: (data: UserPostDietData) => postUserDiet(data),
    onError: () => {},
    onSuccess: () => {},
  });

  return { data, postUserDietMutation, isLoading };
};
