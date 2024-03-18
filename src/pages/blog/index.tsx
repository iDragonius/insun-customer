import React, { FC, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "@/utils/loader";
import dayjs from "dayjs";
import { useQuery } from "@apollo/client";
import Loader from "@/components/ui/shared/Loader";
import { BlogPreviewItem, BlogsResponse } from "@/interfaces/blogs.interface";
import GET_BLOGS from "@/gql/queries/blogs";
import slugify from "slugify";
import { useDebounce, useOnClickOutside } from "usehooks-ts";
import { Dropdown } from "rsuite";

export interface BlogsPageProps {}

const BlogsPage: FC<BlogsPageProps> = () => {
  const { data, loading } = useQuery<BlogsResponse>(GET_BLOGS, {
    variables: {
      locale: "az",
    },
  });
  const [items, setItems] = useState<BlogPreviewItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryFilterRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  useOnClickOutside(categoryFilterRef, () => setOpen(false));
  useEffect(() => {
    if (data) {
      setItems(data.blogs.data);
      const categoriesTemp: string[] = [];

      data.blogs.data.map((blog) =>
        categoriesTemp.push(blog.attributes.category),
      );
      // @ts-ignore
      setCategories([...new Set(categoriesTemp)]);
    }
  }, [data]);
  const [search, setSearch] = useState<string>("");
  const debounceValue = useDebounce(search, 300);
  useEffect(() => {
    if (debounceValue.trim().length > 0) {
      setItems(
        data?.blogs.data.filter((blog) =>
          blog.attributes.title
            .toLowerCase()
            .includes(debounceValue.toLowerCase()),
        ) || [],
      );
    } else {
      setItems(data?.blogs.data || []);
    }
  }, [debounceValue]);
  if (loading) {
    return <Loader />;
  }
  function searchByCategory(category: string) {
    setItems(
      data?.blogs.data.filter(
        (blog) => blog.attributes.category === category,
      ) || [],
    );
  }
  return (
    <>
      <Head>
        <title>Bloqlar</title>
      </Head>
      <main className={"box"}>
        <div
          className={
            "flex justify-between items-center gap-2 mt-16  mb-10 max-[900px]:flex-col"
          }
        >
          <h3 className={" text-[#424242] text-[44px] font-bold"}>Bloqlar</h3>
          <div className={"flex justify-between gap-4"}>
            <div ref={categoryFilterRef} className={"relative"}>
              <div
                onClick={() => setOpen((prevState) => !prevState)}
                className={
                  "h-[46px] flex items-center justify-center font-semibold gap-2 bg-gray-100 cursor-pointer px-3 rounded-[6px] w-[160px]"
                }
              >
                {selectedCategory || "Kateqoriya"}
                <Dropdown />
              </div>
              {open && (
                <div
                  className={
                    "bg-white w-full py-2 absolute drop-shadow-2xl mt-1"
                  }
                >
                  {categories.map((category) => (
                    <div
                      className={
                        "trans hover:bg-primary hover:text-white font-medium px-2 py-1 cursor-pointer"
                      }
                      onClick={() => {
                        setSelectedCategory(category);
                        searchByCategory(category);
                        setOpen(false);
                      }}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder={"Axtarış..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={
                "border px-4 py-2.5 w-[200px]  rounded-[6px] outline-none focus:border-primary hover:border-primary"
              }
            />
          </div>
        </div>

        <div
          className={
            "grid  grid-cols-1 sm:grid-cols-2 min-[1000px]:grid-cols-3 gap-8 mb-16 mt-10"
          }
        >
          {items.map((blog) => (
            <Link
              href={`/blog/${slugify(blog.attributes.title) + "-" + blog.id}`}
            >
              {blog.attributes.thumbnail.data && (
                <Image
                  loader={imageLoader}
                  src={blog.attributes.thumbnail.data.attributes.url}
                  alt={blog.attributes.thumbnail.data.attributes.name}
                  width={416}
                  height={300}
                  className={"mb-6 w-full"}
                />
              )}

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
