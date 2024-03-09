import React, { FC } from "react";
import bannerImage from "@/assets/contact/banner.jpg";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export interface BannerProps {}

const Banner: FC<BannerProps> = () => {
  const { t } = useTranslation("common");

  return (
    <div
      className={
        "relative py-5   sm:h-[300px] mb:h-[500px] flex items-center justify-center"
      }
    >
      <Image
        src={bannerImage}
        alt={"banner"}
        className={"w-full h-full mb:h-[500px] object-cover absolute z-[40]"}
      />
      <div className={"z-50 relative w-full "}>
        <div className={"box"}>
          <div className={"mb:w-[640px]"}>
            <h2
              className={
                " text-32 min-[900px]:text-[40px] mb:text-[56px] font-bold  mb:leading-[90px] mb-4 text-white"
              }
            >
              {t("contact_title")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
