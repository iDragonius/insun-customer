import React, { FC } from "react";
import flowersImage from "@/assets/about-us/flowers.jpg";
import Image from "next/image";
import { AboutInfoSubItemProps } from "@/interfaces/about-info.interface";
import ReactMarkdown from "react-markdown";
import { MdxComponents } from "@/utils/mdx-components";
export interface AboutProps {
  data: AboutInfoSubItemProps[];
}

const About: FC<AboutProps> = ({ data }) => {
  return (
    <div className={"mt-8 boxM "}>
      <div className={"border border-main py-10 px-6 rounded-[8px] mb-14"}>
        <h2 className={"text-20 sm:text-24 mb:text-[36px] font-bold mb-4"}>
          {data[0].title}
        </h2>
        <div className={"text-14 sm:text-16"}>
          <ReactMarkdown components={MdxComponents}>
            {data[0].description}
          </ReactMarkdown>
        </div>
      </div>
      <div
        className={
          "flex justify-between mb-[64px] gap-8 min-[1000px]:flex-row flex-col-reverse"
        }
      >
        <div className={"border border-main py-10 px-6 rounded-[8px]"}>
          <h2 className={" text-20 sm:text-24 mb:text-[36px] font-bold mb-4"}>
            {data[1].title}
          </h2>
          <div className={"text-14 sm:text-16"}>
            <ReactMarkdown components={MdxComponents}>
              {data[1].description}
            </ReactMarkdown>
          </div>
        </div>
        <Image
          src={flowersImage}
          alt={"flowers"}
          className={"w-full object-cover"}
        />
      </div>
    </div>
  );
};

export default About;
