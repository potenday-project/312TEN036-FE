import { Box, Card, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";

const DietStateCard = () => {
  return (
    <>
      <Card
        bg={"rgba(0, 0, 0, 0.2)"}
        h={"70px"}
        w={"346px"}
        color={"#FFFFFF"}
        padding={"22px"}
        flexDir={"row"}
        borderRadius={"12px"}
      >
        <HStack display={"flex"} margin={"0 auto"} w={"100%"} spacing={"18px"}>
          <Box w={"20%"}>
            <Image
              src={
                "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
              }
              alt="식선생"
              width={70}
              height={70}
            />
          </Box>
          <Box w={"70%"}>
            <Text>
              식단을 입력하시면
              <br />
              오늘의 솔루션을 드릴게요
            </Text>
          </Box>
        </HStack>
      </Card>
    </>
  );
};

export default DietStateCard;
