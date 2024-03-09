import React, { FC } from "react";
import headsImage from "@/assets/heads-image.jpg";
import Image from "next/image";
import { ImageProps } from "@/interfaces/shared.interface";
import { ServerUrl } from "@/constants/server-url";
export interface HeroProps {
  data: {
    image: ImageProps;
    fullName: string;
    position: string;
  };
}

const Hero: FC<HeroProps> = ({ data }) => {
  return (
    <div className={"bg-primary py-10 min-[1000px]:py-0 "}>
      <div
        className={
          "box flex justify-between gap-4  mt-0 sm:mt-28 min-[1000px]:mt-0 h-[500px] items-center min-[1000px]:flex-row flex-col-reverse"
        }
      >
        <div className={"text-white"}>
          <h2
            className={
              "text-28 sm:text-[56px] sm:leading-[90px] font-bold mb-1 text-center sm:text-left"
            }
          >
            {data.fullName}
          </h2>
          <p
            className={
              "sm:leading-10 text-18 sm:text-24 font-semibold text-center sm:text-left"
            }
          >
            {data.position}
          </p>
        </div>
        <Image
          src={ServerUrl + data.image.data.attributes.url}
          alt={"image"}
          className={"object-cover h-[500px]"}
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Hero;
