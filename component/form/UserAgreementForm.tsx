"use client";

import {
  Box,
  ButtonGroup,
  Checkbox,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useLayoutEffect, useState } from "react";
import MainButton from "../button/MainButton";
import {
  personalAgreement,
  serviceAgreement,
} from "../../utils/DummyData/AgreementData";

interface UserAgreementFormPropsType {
  setFunnel: React.Dispatch<React.SetStateAction<string>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

const UserAgreementForm = ({
  setFunnel,
  setProgress,
}: UserAgreementFormPropsType) => {
  const [checkedItems, setCheckedItems] = useState([false, false]);
  const [modalState, setModalState] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={["full", "xl", "xl"]}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader padding={"30px"} />
          <ModalBody minW={"390px"}>
            {modalState === "serviceAgreement" && (
              <>
                <Text>서비스 이용 약관</Text>
                <br />
                {serviceAgreement}
              </>
            )}
            {modalState === "personalAgreement" && (
              <Box overflow={"scroll"}>
                <Text as={"pre"}>{personalAgreement}</Text>
              </Box>
            )}
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
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
          border={"1px solid #00CE84"}
          borderRadius={"12px"}
        >
          <Checkbox
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            margin={"auto 20px"}
            color={"#00CE84"}
            onChange={(e) =>
              setCheckedItems([e.target.checked, e.target.checked])
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
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          <Box
            onClick={() => {
              onOpen();
              setModalState("serviceAgreement");
            }}
          >
            (필수) 서비스 이용 약관 동의
          </Box>
        </Checkbox>
        <Checkbox
          color={"#838383"}
          margin={"auto 20px"}
          textDecor={"underline"}
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          <Box
            onClick={() => {
              onOpen();
              setModalState("personalAgreement");
            }}
          >
            (필수) 개인 정보 수집 및 이용 동의
          </Box>
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
          isDisabled={checkedItems.filter((ele) => ele).length !== 2}
          _disabled={{
            bgColor: "#D2D2D2",
            color: "#FFFFFF",
          }}
          _hover={{
            bgColor: "#2B2C2C30",
            color: "#FFFFFF",
          }}
          bgColor={"#2B2C2C"}
          onClick={() => {
            setFunnel("userInfo");
            setProgress((oldState) => oldState + 33.3);
          }}
        >
          다음으로
        </MainButton>
      </ButtonGroup>
    </>
  );
};

export default UserAgreementForm;
