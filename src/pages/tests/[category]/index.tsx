import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import Loader from "@/components/ui/shared/Loader";
import Head from "next/head";
import Link from "next/link";
import slugify from "slugify";
import { TestCategoryTestsResponse } from "@/interfaces/test-category-tests.interface";
import GET_TEST_CATEGORY_TESTS from "@/gql/queries/test-category-tests";
import { useRouter } from "next/router";

export interface TestCategoryProps {}

const TestCategory: FC<TestCategoryProps> = () => {
  const { query, isReady } = useRouter();
  const { data, loading, error } = useQuery<TestCategoryTestsResponse>(
    GET_TEST_CATEGORY_TESTS,
    {
      skip: !isReady,
      variables: {
        locale: "az",
        id: (query.category as string).split("-").at(-1),
      },
    },
  );
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>ERROR</div>;
  }
  return (
    <>
      <Head>
        <title>{data?.testCategory.data.attributes.name}</title>
      </Head>
      <main className={"box"}>
        <h1 className={"mt-10 text-32 font-semibold text-primary mb-1"}>
          {data?.testCategory.data.attributes.name}
        </h1>
        <p className={"text-18 font-medium mb-6"}>
          {data?.testCategory.data.attributes.description}
        </p>
        <div className={"grid grid-cols-3 gap-5 mb-20"}>
          {data?.testCategory.data.attributes.tests.data.map((test) => (
            <div
              className={
                "w-full  border px-4 py-6 rounded-[12px] gap-4 group trans hover:border-primary "
              }
            >
              <div className={"group-hover:!text-primary"}>
                <p className={"text-18 sm:text-20 font-semibold "}>
                  {test.attributes.name}
                </p>
              </div>
              <Link
                href={`/tests/${
                  slugify(data?.testCategory.data.attributes.name) +
                  "-" +
                  data?.testCategory.data.id
                }/${slugify(test.attributes.name) + "-" + test.id}`}
                className={
                  "bg-primary text-white mt-10 block text-center py-2 px-3 rounded-[6px] text-18 font-medium trans hover:bg-primary-hover"
                }
              >
                Testə başla
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default TestCategory;
