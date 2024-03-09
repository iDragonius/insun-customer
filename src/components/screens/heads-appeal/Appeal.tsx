import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { MdxComponents } from "@/utils/mdx-components";

export interface AppealProps {
  data: {
    title: string;
    content: string;
  };
}

const Appeal: FC<AppealProps> = ({ data }) => {
  return (
    <div className={"boxM "}>
      <div
        className={
          "border border-main py-10 px-6 rounded-[8px] min-[1000px]:-mt-20 mt-10  bg-white z-[10px] relative mb-[104px] "
        }
      >
        <h2 className={"text-20 sm:text-[36px] font-bold mb-4"}>
          {data.title}
        </h2>
        <div className={"text-14 sm:text-16"}>
          <ReactMarkdown components={MdxComponents}>
            {data.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Appeal;
