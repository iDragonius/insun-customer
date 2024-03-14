import React, { FC } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { BlogItemResponse } from "@/interfaces/blog-item.interface";
import GET_BLOG_ITEM from "@/gql/queries/blog-item";
import Loader from "@/components/ui/shared/Loader";
import Head from "next/head";
import Link from "next/link";
import { BackArrow } from "@/components/icons";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import slugify from "slugify";
import Image from "next/image";
import { imageLoader } from "@/utils/loader";
import { EducationItemResponse } from "@/interfaces/education-item.interface";
import GET_EDUCATION_ITEM from "@/gql/queries/education-item";

export interface EducationPageProps {}
const MdxComponents = {
  h2: ({ node, ...props }: { node: unknown }) => (
    <h3 className={"text-24 font-bold mb-3 "} {...props} />
  ),
  p: ({ node, ...props }: { node: unknown }) => (
    <p
      className={"mb-2"}
      style={{
        marginBottom: "20px",
        color: "#424242",
        lineHeight: "32px",
        fontWeight: 500,
      }}
      {...props}
    />
  ),
  li: ({ node, ...props }: { node: unknown }) => (
    <li className={"ml-4 mb-1 list-disc"} {...props} />
  ),
};
const EducationPage: FC<EducationPageProps> = () => {
  const { query } = useRouter();
  const { data, loading } = useQuery<EducationItemResponse>(
    GET_EDUCATION_ITEM,
    {
      variables: {
        locale: "az",
        id: (query.id as string).split("-").at(-1),
      },
    },
  );
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>{data?.education.data.attributes.title}</title>
      </Head>
      <main>
        <div className={"relative box mt-10"}>
          <Link
            href={"/education"}
            className={
              "  fixed bottom-20 sm:bottom-auto w-max items-center gap-3 py-3 px-5   flex rounded-[2px] border border-[#DADADA] bg-white"
            }
          >
            <BackArrow />
            <p className={"text-bodyText"}>Geri qayıt</p>
          </Link>
          <div className={"min-[1000px]:w-[864px] mx-auto  mb-20"}>
            <h3
              className={
                "py-10 border border-[#DADADA] px-6 text-bodyText text-28 sm:text-[36px] bg-white font-bold rounded-[8px] "
              }
            >
              {data?.education.data.attributes.title}
            </h3>
            <div className={"p-6 border  border-[#DADADA] mt-4 rounded-[8px] "}>
              <Image
                loader={imageLoader}
                src={
                  data?.education.data.attributes.thumbnail.data.attributes
                    .url as string
                }
                alt={data?.education.data.attributes.title || ""}
                width={300}
                height={300}
                className={"float-left mr-6 mb-4 object-contain rounded-[6px]"}
              />
              <ReactMarkdown components={MdxComponents}>
                {data?.education.data.attributes.content || ""}
              </ReactMarkdown>
            </div>
            <div
              className={
                "mt-6 bg-[#F8F8F8] py-5 px-6 text-[#424242] rounded-[8px]"
              }
            >
              {dayjs(data?.education.data.attributes.date).format("DD.MM.YYYY")}
            </div>
          </div>
          <div>
            <h2 className={"text-bodyText font-bold text-[36px] mb-6"}>
              Digər Bloqlar
            </h2>
            <div
              className={
                "grid  grid-cols-1 sm:grid-cols-2 min-[1000px]:grid-cols-3 gap-8 mb-16"
              }
            >
              {data?.educations.data.map((education) => (
                <Link
                  href={`/education/${
                    slugify(education.attributes.title) + "-" + education.id
                  }`}
                >
                  <Image
                    loader={imageLoader}
                    src={education.attributes.thumbnail.data.attributes.url}
                    alt={education.attributes.thumbnail.data.attributes.name}
                    width={416}
                    height={300}
                    className={"mb-6 w-full"}
                  />
                  <p
                    className={"text-[13px] text-[#A1A1A1] font-semibold mb-2"}
                  >
                    {dayjs(education.attributes.date).format("DD.MM.YYYY")}
                  </p>
                  <h3
                    className={"line-clamp-2 font-bold text-24 text-bodyText "}
                  >
                    {education.attributes.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EducationPage;
