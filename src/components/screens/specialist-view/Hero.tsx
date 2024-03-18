import { ImageProps } from "@/interfaces/shared.interface";
import { imageLoader } from "@/utils/loader";
import Image from "next/image";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
export interface HeroProps {
  formRef: React.MutableRefObject<HTMLDivElement | null>;
  data: {
    fullName: string;
    slogan: string;
    field: string;
    image: ImageProps;
  };
}

const Hero: FC<HeroProps> = ({ formRef, data }) => {
  const scrollTo = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={"bg-primary-100 "}>
      <div
        className={
          "box flex gap-10 justify-between min-[900px]:flex-row flex-col-reverse  "
        }
      >
        <div className={"text-white min-[900px]:py-14  "}>
          <p
            className={
              "text-20 min-[900px]:text-24 font-semibold min-[900px]:leading-10 mb-1"
            }
          >
            {data.field}
          </p>
          <h2
            className={
              "text-32 sm:text-[40px] min-[900px]:text-[56px] min-[900px]:leading-[90px] font-bold mb-4 mb:mb-5"
            }
          >
            {data.fullName}
          </h2>
          <div className={"mb-12"}>
            <div
              className={
                "leading-8 text-[24px] min-[900px]:text-16  font-medium "
              }
            >
              <ReactMarkdown
                components={{
                  p: ({ node, ...props }: { node: unknown }) => (
                    <p className={"mb-2 text-24"} {...props} />
                  ),
                }}
              >
                {data.slogan}
              </ReactMarkdown>
            </div>
          </div>
          <button
            onClick={scrollTo}
            className={
              "leading-8 font-bold mb-10 min-[900px]:mb-0  text-primary-100 bg-white px-6 py-4 rounded-[4px] trans hover:ring-4 hover:ring-white hover:ring-opacity-70"
            }
          >
            Müraciət et
          </button>
        </div>
        {data.image.data && (
          <Image
            loader={imageLoader}
            src={data.image.data.attributes.url}
            alt={"specialist"}
            height={500}
            width={data.image.data.attributes.width}
            className={
              "object-cover w-full mt-5 min-[900px]:mt-0 min-[900px]:max-w-[500px] h-[528px]"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
