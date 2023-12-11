import {
  Box,
  ButtonGroup,
  Checkbox,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import MainButton from "../button/MainButton";

interface UserAgreementFormPropsType {
  setFunnel: React.Dispatch<React.SetStateAction<string>>;
}

const UserAgreementForm = ({ setFunnel }: UserAgreementFormPropsType) => {
  const [checkedItems, setCheckedItems] = useState([false, false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  console.log();
  return (
    <>
      <Box as="section" alignSelf={"flex-start"}>
        <Heading
          as={"h1"}
          color={"#000000"}
          fontSize={"24px"}
          fontWeight={"semibold"}
          lineHeight={"35px"}
        >
          식선생을 이용하시려면
          <br />
          약관 동의가 필요해요.
        </Heading>
      </Box>

      <VStack alignItems={"flex-start"} spacing={5} padding={"30px 0"}>
        <Flex
          w={"346px"}
          h={"48px"}
          border={"1px solid #BCBCBC"}
          borderRadius={"12px"}
        >
          <Checkbox
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            margin={"auto 20px"}
            color={"#BCBCBC"}
            onChange={(e) =>
              setCheckedItems([
                e.target.checked,
                e.target.checked,
                e.target.checked,
              ])
            }
          >
            모두 동의합니다.
          </Checkbox>
        </Flex>
        <Checkbox
          color={"#838383"}
          isChecked={checkedItems[0]}
          textDecor={"underline"}
          margin={"auto 20px"}
          onChange={(e) =>
            setCheckedItems([
              e.target.checked,
              checkedItems[1],
              checkedItems[2],
            ])
          }
        >
          (필수) 서비스 이용 약관 동의
        </Checkbox>
        <Checkbox
          color={"#838383"}
          margin={"auto 20px"}
          textDecor={"underline"}
          isChecked={checkedItems[1]}
          onChange={(e) =>
            setCheckedItems([
              checkedItems[0],
              e.target.checked,
              checkedItems[2],
            ])
          }
        >
          (필수) 개인 정보 수집 및 이용 동의
        </Checkbox>
        <Checkbox
          color={"#838383"}
          textDecor={"underline"}
          margin={"auto 20px"}
          isChecked={checkedItems[2]}
          onChange={(e) =>
            setCheckedItems([
              checkedItems[0],
              checkedItems[1],
              e.target.checked,
            ])
          }
        >
          (필수) 만 14세 이상입니다
        </Checkbox>
      </VStack>

      <ButtonGroup
        width={"100%"}
        pos={"absolute"}
        bottom={"30px"}
        margin={"0 auto"}
        justifyContent={"center"}
      >
        <MainButton
          w={"100%"}
          h={"52px"}
          isDisabled={checkedItems.filter((ele) => ele).length !== 3}
        >
          동의하고 시작하기
        </MainButton>
      </ButtonGroup>
    </>
  );
};

export default UserAgreementForm;
