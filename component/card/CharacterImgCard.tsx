import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import stage1 from "../../utils/img/stage1.png";
import stage2 from "../../utils/img/2stage.jpg";
import stage3 from "../../utils/img/3stage.jpg";
import stage4 from "../../utils/img/4stage.jpg";
import stage5 from "../../utils/img/5stage.jpg";

const CharacterImgCard = () => {
  return (
    <Image
      src={stage1}
      alt="캐릭터"
      placeholder="blur"
      width={346}
      height={346}
      quality={100}
    />
  );
};

export default CharacterImgCard;
