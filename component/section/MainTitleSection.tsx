import { Box, HStack, Heading } from "@chakra-ui/react";
import Image from "next/image";

const MainTitleSection = () => {
  return (
    <>
      <Box>
        <HStack spacing={"15px"}>
          <Image
            src={
              "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
            }
            alt="식선생"
            width={70}
            height={70}
          />
          <Heading
            as={"h1"}
            color={"#000000"}
            fontSize={"24px"}
            fontWeight={"medium"}
          >
            식단을 입력하시면
            <br />
            오늘의 솔루션을 드릴게요
          </Heading>
        </HStack>
      </Box>
    </>
  );
};

export default MainTitleSection;
