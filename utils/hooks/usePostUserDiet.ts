import { useMutation } from "@tanstack/react-query";
import { postUserDiet } from "../API/AxiosSetting";

export const usePostUserDiet = () => {
  const {
    data,
    mutateAsync: postUserDietMutation,
    isLoading,
  } = useMutation({
    mutationFn: () => postUserDiet(),
    onError: () => {},
    onSuccess: () => {},
  });

  return { data, postUserDietMutation, isLoading };
};
