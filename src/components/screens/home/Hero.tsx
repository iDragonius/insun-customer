import React, { FC } from "react";
import heroImage from "@/assets/home/hero.png";
import Image from "next/image";
import { Block1, Block2 } from "@/components/icons/home";
import useTranslation from "next-translate/useTranslation";
export interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const { t } = useTranslation("common");
  return (
    <div className={"relative"}>
      <Block1 className={"absolute right-0 bottom-0"} />
      <Block2 className={"absolute left-0  mb:block hidden"} />

      <div
        className={
          "box flex justify-between  flex-col-reverse min-[1200px]:flex-row relative pt-16"
        }
      >
        <div className={"text-bodyText mb:w-[500px]"}>
          <h1
            className={
              " text-28 sm:text-32 min-[900px]:text-[38px] mb:text-[46px] font-bold mb-3"
            }
          >
            {t("home_hero_title")}
          </h1>
          <p className={"leading-8 mb:leading-10 text-14 sm:text-18 mb-9"}>
            {t("home_hero_description")}
          </p>
        </div>
        <Image src={heroImage} alt={"hero"} className={" object-cover  "} />
      </div>
    </div>
  );
};

export default Hero;
