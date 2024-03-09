import React, { FC } from "react";
import bannerImage from "@/assets/home/banner.jpg";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
export interface BannerProps {}

const Banner: FC<BannerProps> = () => {
  const { t } = useTranslation("common");
  return (
    <div
      className={
        "relative py-20   sm:h-[300px] mb:h-[410px] flex items-center justify-center"
      }
    >
      <Image
        src={bannerImage}
        alt={"banner"}
        className={"w-full h-full mb:h-[410px] object-cover absolute z-[40]"}
      />
      <div className={"z-50 relative w-full "}>
        <div className={"box"}>
          <div className={"mb:w-[640px]"}>
            <h2
              className={
                " text-24 min-[900px]:text-[32px] mb:text-[36px] font-bold  mb:leading-[65px] mb-4 text-white"
              }
            >
              {t("home_banner_text")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
