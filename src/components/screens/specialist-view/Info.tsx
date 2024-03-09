import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { MdxComponents } from "@/utils/mdx-components";

export interface InfoProps {
  data: {
    activityDirections: string;
    education: string;
  };
}

const Info: FC<InfoProps> = ({ data }) => {
  return (
    <div className={"box my-10"}>
      <div className={"flex min-[900px]:flex-row flex-col gap-8 my-8 "}>
        <Block label={"Təhsil"} description={data.education} markdown={true} />
        <Block
          label={"Fəaliyyət istiqamətləri"}
          description={data.activityDirections}
          markdown={true}
        />
      </div>
      <div className={"mb-8"}></div>
      <div className={"mb-10"}></div>
    </div>
  );
};

const Block = ({
  label,
  description,
  markdown,
}: {
  label: string;
  description: string;
  markdown: boolean;
}) => {
  return (
    <div className={"py-10 px-6 border border-main rounded-[8px] w-full"}>
      <h3
        className={
          "font-bold text-24 sm:text mb:text-[36px] leading-8 mb:leading-[64px] mb-4"
        }
      >
        {label}
      </h3>
      {markdown ? (
        <ReactMarkdown components={MdxComponents}>{description}</ReactMarkdown>
      ) : (
        <p className={"text-bodyText leading-8 font-medium"}>{description}</p>
      )}
    </div>
  );
};
export default Info;
