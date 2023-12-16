import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import stage1 from "../../utils/img/stage1.png";
import stage2 from "../../utils/img/stage2.png";
import stage3 from "../../utils/img/stage3.png";
import stage4 from "../../utils/img/stage4.png";
import stage5 from "../../utils/img/stage5.png";
import { DietResponse } from "../../utils/api/AxiosSetting";

const CharacterImgCard = ({
  userDiet,
}: {
  userDiet: DietResponse | undefined;
}) => {
  function getStageName(step: number | undefined) {
    if ((step as number) >= 800) {
      return stage5;
    } else if ((step as number) >= 400) {
      return stage4;
    } else if ((step as number) >= 200) {
      return stage3;
    } else if ((step as number) >= 100) {
      return stage2;
    } else {
      return stage1;
    }
  }
  const characterImg = getStageName(userDiet?.초과칼로리);
  return (
    <Image
      src={characterImg}
      alt="캐릭터"
      placeholder="blur"
      style={{ width: "100%", height: "auto" }}
      quality={100}
    />
  );
};

export default CharacterImgCard;
