import { BackArrow } from "@/components/icons";
import Loader from "@/components/ui/shared/Loader";
import { Config } from "@/constants/config";
import { initializeApollo } from "@/gql/apollo-client";
import GET_NEWS_ITEM from "@/gql/queries/news-item";
import { NewsItemResponse } from "@/interfaces/news-item.interface";
import { useQuery } from "@apollo/client";
import dayjs from "dayjs";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { imageLoader } from "@/utils/loader";

export interface NewsItemPageProps {
  // data: NewsItemResponse;
}
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

const NewsItemPage: FC<NewsItemPageProps> = () => {
  const { query } = useRouter();
  const { data, loading } = useQuery<NewsItemResponse>(GET_NEWS_ITEM, {
    variables: {
      locale: "az",
      id: query.id,
    },
  });
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>{data?.news.data.attributes.title}</title>
      </Head>
      <main>
        <div className={"relative box mt-10"}>
          <Link
            href={"/news"}
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
              {data?.news.data.attributes.title}
            </h3>
            <div className={"p-6 border  border-[#DADADA] mt-4 rounded-[8px] "}>
              <ReactMarkdown components={MdxComponents}>
                {data?.news.data.attributes.content || ""}
              </ReactMarkdown>
              <div className={"flex flex-col gap-4"}>
                {data?.news.data.attributes.youtubeLinks.map((link, i) => (
                  <iframe
                    className={"w-full h-[400px]"}
                    src={link.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ))}
              </div>
            </div>
            <div
              className={
                "mt-6 bg-[#F8F8F8] py-5 px-6 text-[#424242] rounded-[8px]"
              }
            >
              {dayjs(data?.news.data.attributes.date).format("DD.MM.YYYY")}
            </div>
          </div>
          <div>
            <h2 className={"text-bodyText font-bold text-[36px] mb-6"}>
              Digər Xəbərlər
            </h2>
            <div
              className={
                "grid  grid-cols-1 sm:grid-cols-2 min-[1000px]:grid-cols-3 gap-8 mb-16"
              }
            >
              {data?.newsP.data.map((newsItem) => (
                <Link href={`/news/${newsItem.id}`}>
                  <Image
                    loader={imageLoader}
                    src={newsItem.attributes.thumbnail.data.attributes.url}
                    alt={newsItem.attributes.thumbnail.data.attributes.name}
                    width={416}
                    height={300}
                    className={"mb-6 w-full"}
                  />
                  <p
                    className={"text-[13px] text-[#A1A1A1] font-semibold mb-2"}
                  >
                    {dayjs(newsItem.attributes.date).format("DD.MM.YYYY")}
                  </p>
                  <h3
                    className={"line-clamp-2 font-bold text-24 text-bodyText "}
                  >
                    {newsItem.attributes.title}
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale, query } = context;
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: GET_NEWS_ITEM,
    variables: {
      locale: Config.multiLanguage ? locale : "az",
      id: query.id,
    },
  });

  return {
    props: { data },
  };
};

export default NewsItemPage;
