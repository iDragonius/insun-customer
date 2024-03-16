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
import { PartnerItemResponse } from "@/interfaces/partner-item.interface";
import GET_PARTNER_ITEM from "@/gql/queries/partner-item";

export interface PartnerPageProps {}
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
const PartnerPage: FC<PartnerPageProps> = () => {
  const { query } = useRouter();
  const { data, loading } = useQuery<PartnerItemResponse>(GET_PARTNER_ITEM, {
    variables: {
      id: (query.id as string).split("-").at(-1),
    },
  });
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>{data?.partner.data.attributes.name}</title>
      </Head>
      <main>
        <div className={"relative box mt-10"}>
          <Link
            href={"/about-us/partners"}
            className={
              "  fixed bottom-20 sm:bottom-auto w-max items-center gap-3 py-3 px-5   flex rounded-[2px] border border-[#DADADA] bg-white"
            }
          >
            <BackArrow />
            <p className={"text-bodyText"}>Geri qayıt</p>
          </Link>
          <div className={"min-[1000px]:w-[864px] mx-auto  mb-20"}>
            <div
              className={
                "px-6 py-3 border  border-[#DADADA] mt-4 rounded-[8px]  "
              }
            >
              <Image
                loader={imageLoader}
                src={
                  data?.partner.data.attributes.logo.data.attributes
                    .url as string
                }
                alt={
                  data?.partner.data.attributes.logo.data.attributes.name || ""
                }
                width={416}
                height={300}
                className={" !h-[400px] w-full object-contain"}
              />
            </div>
            <div className={"p-6 border  border-[#DADADA] mt-4 rounded-[8px] "}>
              <h3
                className={
                  "py-4 text-bodyText text-28 sm:text-[36px] bg-white font-bold rounded-[8px] "
                }
              >
                {data?.partner.data.attributes.name}
              </h3>
              <ReactMarkdown components={MdxComponents}>
                {data?.partner.data.attributes.description || ""}
              </ReactMarkdown>

              <div className={"flex gap-3"}>
                {data?.partner.data.attributes.links.map((link) => (
                  <Link
                    href={link.link}
                    key={link.id}
                    className={
                      "bg-white  rounded-full flex items-center justify-center w-10 h-10 shadow-lg"
                    }
                  >
                    <Image
                      loader={imageLoader}
                      src={link.logo.data.attributes.url}
                      alt={link.name}
                      width={32}
                      height={32}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className={"text-bodyText font-bold text-[36px] mb-6"}>
              Digər tərəfdaşlar
            </h2>
            <div
              className={
                "grid  grid-cols-1 sm:grid-cols-2 min-[1000px]:grid-cols-3 gap-8 mb-16"
              }
            >
              {data?.partners.data.map((partner) => (
                <Link
                  href={`/about-us/partners/${
                    slugify(partner.attributes.name) + "-" + partner.id
                  }`}
                >
                  <div
                    className={
                      "h-[280px] w-full border mb-3 p-2 rounded-[10px]"
                    }
                  >
                    <Image
                      loader={imageLoader}
                      src={partner.attributes.logo.data.attributes.url}
                      alt={partner.attributes.logo.data.attributes.name}
                      width={416}
                      height={300}
                      className={" h-full w-full object-contain"}
                    />
                  </div>

                  <h3
                    className={
                      "line-clamp-2 font-bold text-24 text-bodyText  text-center"
                    }
                  >
                    {partner.attributes.name}
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

export default PartnerPage;
