import React, { FC } from "react";
import Image from "next/image";
import bannerImage from "@/assets/about-us/banner.jpg";
import useTranslation from "next-translate/useTranslation";
export interface BannerProps {
  data: {
    title: string;
    description: string;
  };
}

const Banner: FC<BannerProps> = ({ data }) => {
  const { t } = useTranslation("common");
  return (
    <div
      className={
        "relative py-5   sm:h-[400px] mb:h-[700px] flex items-center justify-center"
      }
    >
      <Image
        src={bannerImage}
        alt={"banner"}
        className={"w-full h-full mb:h-[700px] object-cover absolute z-[40]"}
      />
      <div className={"z-50 relative w-full "}>
        <div className={"  box"}>
          <div className={"mb:w-[640px]"}>
            <h2
              className={
                "mb:text-[56px] min-[900px]:text-[36px] text-24 font-bold text-white mb:leading-[90px] mb-4"
              }
            >
              {data.title}
            </h2>
            <p
              className={
                "leading-8 nb:text-16 min-[900px]:text-14 text-[12px] text-white font-medium"
              }
            >
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
