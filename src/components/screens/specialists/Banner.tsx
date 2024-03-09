import React, { FC } from "react";
import bannerImage from "@/assets/specialists/banner.png";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
export interface BannerProps {}

const Banner: FC<BannerProps> = () => {
  const { t } = useTranslation("common");
  return (
    <div
      className={
        "relative py-5   sm:h-[300px] mb:h-[700px] flex items-center justify-center"
      }
    >
      <Image
        src={bannerImage}
        alt={"banner"}
        className={"w-full h-full mb:h-[700px] object-cover absolute z-[40]"}
      />
      <div className={"z-50 relative w-full mt-auto "}>
        <div className={"box"}>
          <div className={""}>
            <h2
              className={
                "text-32 min-[900px]:text-[40px] mb:text-[48px]  font-bold  mb:leading-[70px] mb-4 text-white "
              }
            >
              {t("specialist_title")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
