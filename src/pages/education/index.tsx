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
import { EducationsResponse } from "@/interfaces/educations.interface";
import GET_EDUCATIONS from "@/gql/queries/educations";

export interface EducationPageProps {}

const EducationPage: FC<EducationPageProps> = () => {
  const { data, loading } = useQuery<EducationsResponse>(GET_EDUCATIONS, {
    variables: {
      locale: "az",
    },
  });

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>Təhsil</title>
      </Head>
      <main className={"box"}>
        <h3 className={"mt-16 mb-10 text-[#424242] text-[44px] font-bold"}>
          Təhsil
        </h3>

        <div
          className={
            "grid  grid-cols-1 sm:grid-cols-2 min-[1000px]:grid-cols-3 gap-8 mb-16 mt-10"
          }
        >
          {data?.educations.data?.map((education) => (
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
              <p className={"text-[13px] text-[#A1A1A1] font-semibold mb-2"}>
                {dayjs(education.attributes.date).format("DD.MM.YYYY")}
              </p>
              <h3 className={"line-clamp-2 font-bold text-24 text-bodyText "}>
                {education.attributes.title}
              </h3>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default EducationPage;
