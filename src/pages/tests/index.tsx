import React, { FC } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { SpecialistsResponse } from "@/interfaces/specialists.interface";
import GET_SPECIALISTS from "@/gql/queries/specialists";
import Loader from "@/components/ui/shared/Loader";
import GET_TEST_CATEGORIES from "@/gql/queries/test-categories";
import { TestCategoriesResponse } from "@/interfaces/test-categories.interface";
import Link from "next/link";
import slugify from "slugify";
import Image from "next/image";
import { ServerUrl } from "@/constants/server-url";
import { imageLoader } from "@/utils/loader";

export interface TestsPageProps {}

const TestsPage: FC<TestsPageProps> = () => {
  const { data, loading } = useQuery<TestCategoriesResponse>(
    GET_TEST_CATEGORIES,
    {
      variables: {
        locale: "az",
      },
    },
  );
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>Testlər</title>
      </Head>
      <main className={"box"}>
        <h1 className={"mt-10 text-32 font-semibold text-primary mb-6"}>
          Testlər
        </h1>
        <div className={"flex flex-col gap-5 mb-20"}>
          {data?.testCategories.data.map((category) => (
            <Link
              href={`/tests/${
                slugify(category.attributes.name) + "-" + category.id
              }`}
              className={
                "w-full flex border p-4 rounded-[12px] gap-4 group trans hover:border-primary "
              }
            >
              <Image
                src={category.attributes.image.data.attributes.url}
                alt={category.attributes.name}
                loader={imageLoader}
                width={400}
                height={400}
                className={
                  "w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] object-contain  rounded-[6px]"
                }
              />
              <div className={"group-hover:!text-primary"}>
                <p className={"text-18 sm:text-24 font-semibold "}>
                  {" "}
                  {category.attributes.name}
                </p>
                <p
                  className={
                    "font-medium text-gray-600  mt-3 leading-5 text-14 sm:text-18 group-hover:!text-primary"
                  }
                >
                  {category.attributes.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default TestsPage;
