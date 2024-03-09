import React, { FC } from "react";
import { MissionAndVisionItemProps } from "@/components/screens/about-us/our-mission-and-our-vision/MissionsAndVisions";
import { GreenCircle, RedCircle } from "@/components/icons";
import { InfoItemProps } from "@/interfaces/our-mission-and-our-vision.interface";

export interface MissionAndVisionItemsProps {
  label: string;
  data: InfoItemProps[];
}

const MissionAndVisionItem: FC<MissionAndVisionItemsProps> = ({
  label,
  data,
}) => {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div className={"mt-[64px]"}>
      <h3
        className={
          "text-bodyText font-bold sm:text-32 text-24 mb:text-[44px] mb-[64px] mt-10 "
        }
      >
        {label}
      </h3>
      <div
        className={
          "grid min-[900px]:grid-cols-2 grid-cols-1 mb:grid-cols-3  gap-8"
        }
      >
        {data.map((el) => (
          <div key={el.title} className={"relative"}>
            <h4
              className={
                "mb-4 text-18 sm:text-24 leading-19 font-bold text-bodyText z-50"
              }
            >
              {el.title}
            </h4>
            <p className={"text-bodyText sm:text-16 text-14 leading-9 z-100"}>
              {el.description}
            </p>
            {/*<GreenCircle*/}
            {/*  className={"absolute "}*/}
            {/*  style={{*/}
            {/*    top: getRandomInt(200),*/}
            {/*    right: 0,*/}
            {/*  }}*/}
            {/*/>*/}
            {/*<RedCircle*/}
            {/*  className={"absolute "}*/}
            {/*  style={{*/}
            {/*    top: getRandomInt(200),*/}
            {/*    left: -20,*/}
            {/*  }}*/}
            {/*/>*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionAndVisionItem;
