"use client";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";

export type TokenType = string | string[] | undefined;

const SignUpForm = () => {
  const params = useParams();
  const token: TokenType = params?.token;

  /**회원가입 확인 모달창 */
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<any>();

  const router = useRouter();

  /**회원가입 form 제출시 */
  const onSubmit = async (data: any) => {
    const year = Number(data.birth?.slice(0, 4));
    const date = new Date().getFullYear();
    const age = date - year + 1;

    const signUpInform = {
      email: data.email,
      password: data.password,
      name: data.name,
      nickname: data.nickname,
      age: age,
      phone: data.phone_number,
      pick: Number(data.pick),
    };
  };

  return (
    <>
      <Box as="section" maxW={"560px"} margin={"3rem auto"} padding={"0 30px"}>
        <Flex
          onSubmit={handleSubmit(onSubmit)}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <>
            {/* <MainLogo width={40} height={40} fontSize={[20, 20, 30]} /> */}

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"비밀번호"}
                _after={{ content: `"*"`, color: "red" }}
              >
                비밀번호
              </FormLabel>
              <Input
                fontSize={["12px", "13px", "15px"]}
                id="비밀번호"
                h={"50px"}
                type="password"
                placeholder="비밀번호를 입력해주세요."
                fontFamily={"heading"}
              />
              {errors.password && (
                <Text
                  textAlign={"end"}
                  color={"red"}
                  fontSize={"0.9rem"}
                  _before={{ content: `"⚠"` }}
                >
                  {/* {errors.password.message} */}
                </Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"비밀번호 확인"}
                _after={{ content: `"*"`, color: "red" }}
              >
                비밀번호 확인
              </FormLabel>
              <Input
                fontSize={["12px", "13px", "15px"]}
                id="비밀번호 확인"
                h={"50px"}
                type="passwordConfirm"
                placeholder="비밀번호를 다시 입력해주세요."
                fontFamily={"heading"}
              />
              {errors.passwordConfirm && (
                <Text
                  textAlign={"end"}
                  color={"red"}
                  fontSize={"0.9rem"}
                  _before={{ content: `"⚠"` }}
                >
                  {/* {errors.passwordConfirm.message} */}
                </Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"이름"}
                _after={{ content: `"*"`, color: "red" }}
              >
                이름
              </FormLabel>
              <Input
                fontSize={["12px", "13px", "15px"]}
                id="이름"
                h={"50px"}
                placeholder="이름을 입력해주세요."
                fontFamily={"heading"}
              />
              {errors.name && (
                <Text
                  textAlign={"end"}
                  color={"red"}
                  fontSize={"0.9rem"}
                  _before={{ content: `"⚠"` }}
                >
                  {/* {errors.name.message} */}
                </Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"생년월일"}
                _after={{ content: `"*"`, color: "red" }}
              >
                생년월일
              </FormLabel>
              <Input
                fontSize={["12px", "13px", "15px"]}
                id="생년월일"
                h={"50px"}
                type="date"
                fontFamily={"heading"}
              />
              {errors.birth && (
                <Text
                  textAlign={"end"}
                  color={"red"}
                  fontSize={"0.9rem"}
                  _before={{ content: `"⚠"` }}
                >
                  {/* {errors.birth.message} */}
                </Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"닉네임"}
                _after={{ content: `"*"`, color: "red" }}
              >
                닉네임
              </FormLabel>
              <Input
                fontSize={["12px", "13px", "15px"]}
                id="닉네임"
                h={"50px"}
                fontFamily={"heading"}
              />
              {errors.birth && (
                <Text
                  textAlign={"end"}
                  color={"red"}
                  fontSize={"0.9rem"}
                  _before={{ content: `"⚠"` }}
                >
                  {/* {errors.birth.message} */}
                </Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"전화번호"}
                _after={{ content: `"*"`, color: "red" }}
              >
                전화번호
              </FormLabel>
              <Input
                id="전화번호"
                type="number"
                fontSize={["12px", "13px", "15px"]}
                h={"50px"}
                fontFamily={"heading"}
              />
              {errors.phone_number && (
                <Text
                  textAlign={"end"}
                  color={"red"}
                  fontSize={"0.9rem"}
                  _before={{ content: `"⚠"` }}
                >
                  {/* {errors.phone_number.message} */}
                </Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"최애 선택"}
              >
                최애
              </FormLabel>
              <Select
                fontSize={["12px", "13px", "15px"]}
                h={"50px"}
                id="pick"
                fontFamily={"heading"}
                placeholder="당신의 최애를 알려주세요."
                {...register("pick", {})}
              ></Select>
            </FormControl>

            <ButtonGroup>
              <Button
                w="150px"
                h="50px"
                borderRadius="15px"
                type="button"
                onClick={() => router.push("/")}
              >
                홈으로
              </Button>
              <Button
                // isLoading={isLoading}
                w="150px"
                h="50px"
                borderRadius="15px"
                type="submit"
              >
                제출
              </Button>
            </ButtonGroup>
          </>
        </Flex>
      </Box>
    </>
  );
};
export default SignUpForm;
