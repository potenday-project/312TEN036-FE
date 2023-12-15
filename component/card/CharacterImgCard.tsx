import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import stage1 from "../../utils/img/stage1.png";
import stage2 from "../../utils/img/stage2.png";
import stage3 from "../../utils/img/stage3.png";
import stage4 from "../../utils/img/stage4.png";
import stage5 from "../../utils/img/stage5.png";

const CharacterImgCard = () => {
  return (
    <Image
      src={stage1}
      alt="캐릭터"
      placeholder="blur"
      style={{ width: "100%", height: "auto" }}
      quality={100}
    />
  );
};

export default CharacterImgCard;
