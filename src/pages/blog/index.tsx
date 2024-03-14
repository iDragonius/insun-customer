import React, { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "@/utils/loader";
import dayjs from "dayjs";
import { useQuery } from "@apollo/client";
import Loader from "@/components/ui/shared/Loader";
import { BlogsResponse } from "@/interfaces/blogs.interface";
import GET_BLOGS from "@/gql/queries/blogs";
import slugify from "slugify";

export interface BlogsPageProps {}

const BlogsPage: FC<BlogsPageProps> = () => {
  const { data, loading } = useQuery<BlogsResponse>(GET_BLOGS, {
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
        <title>Bloqlar</title>
      </Head>
      <main className={"box"}>
        <h3 className={"mt-16 mb-10 text-[#424242] text-[44px] font-bold"}>
          Bloqlar
        </h3>

        <div
          className={
            "grid  grid-cols-1 sm:grid-cols-2 min-[1000px]:grid-cols-3 gap-8 mb-16 mt-10"
          }
        >
          {data?.blogs.data?.map((blog) => (
            <Link
              href={`/blog/${slugify(blog.attributes.title) + "-" + blog.id}`}
            >
              <Image
                loader={imageLoader}
                src={blog.attributes.thumbnail.data.attributes.url}
                alt={blog.attributes.thumbnail.data.attributes.name}
                width={416}
                height={300}
                className={"mb-6 w-full"}
              />
              <p className={"text-[13px] text-[#A1A1A1] font-semibold mb-2"}>
                {dayjs(blog.attributes.date).format("DD.MM.YYYY")}
              </p>
              <h3 className={"line-clamp-2 font-bold text-24 text-bodyText "}>
                {blog.attributes.title}
              </h3>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default BlogsPage;
