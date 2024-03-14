import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import { BlogsResponse } from "@/interfaces/blogs.interface";
import GET_BLOGS from "@/gql/queries/blogs";
import Loader from "@/components/ui/shared/Loader";
import Head from "next/head";
import Link from "next/link";
import slugify from "slugify";
import Image from "next/image";
import { imageLoader } from "@/utils/loader";
import dayjs from "dayjs";
import { PartnersResponse } from "@/interfaces/partners.interface";
import GET_PARTNERS from "@/gql/queries/partners";

export interface PartnersPageProps {}

const PartnersPage: FC<PartnersPageProps> = () => {
  const { data, loading } = useQuery<PartnersResponse>(GET_PARTNERS);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>Tərəfdaşlar</title>
      </Head>
      <main className={"box"}>
        <h3 className={"mt-16 mb-10 text-[#424242] text-[44px] font-bold"}>
          Tərəfdaşlar
        </h3>

        <div
          className={
            "grid  grid-cols-1 sm:grid-cols-2 min-[1000px]:grid-cols-3 gap-8 mb-16 mt-10"
          }
        >
          {data?.partners.data?.map((partner) => (
            <Link
              href={`/about-us/partners/${
                slugify(partner.attributes.name) + "-" + partner.id
              }`}
            >
              <div
                className={"h-[280px] w-full border mb-3 p-2 rounded-[10px]"}
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
      </main>
    </>
  );
};

export default PartnersPage;
