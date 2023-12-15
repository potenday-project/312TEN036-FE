import { useMutation } from "@tanstack/react-query";
import { postUserDiet } from "../api/AxiosSetting";

export const usePostUserDiet = () => {
  const {
    data,
    mutateAsync: postUserDietMutation,
    isLoading,
  } = useMutation({
    mutationFn: (diet: string) => postUserDiet(diet),
    onError: () => {},
    onSuccess: () => {},
  });

  return { data, postUserDietMutation, isLoading };
};
