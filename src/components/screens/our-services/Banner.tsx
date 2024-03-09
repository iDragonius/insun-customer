import React, { FC } from "react";
import bannerImage from "@/assets/our-services/banner.jpg";
import Image from "next/image";
export interface BannerProps {}

const Banner: FC<BannerProps> = () => {
  return (
    <div
      className={
        "relative  h-[400px] mb:h-[660px] flex items-center justify-centers"
      }
    >
      <Image
        src={bannerImage}
        alt={"banner"}
        className={"w-full h-[400px] mb:h-[660px] object-cover absolute z-[40]"}
      />
      <div className={"z-50 relative w-full "}>
        <div className={"box"}>
          <div className={"mb:w-[640px]"}>
            <h2
              className={
                "mb:text-[56px] font-bold min-[900px]:text-[40px] sm:text-32 text-24  mb:leading-[90px] mb-4 text-bodyText"
              }
            >
              Hərtərəfli inkişafınız üçün çeşidli xidmətlərimizdən faydalanın.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
