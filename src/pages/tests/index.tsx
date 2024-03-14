import React, { FC, useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { SpecialistsResponse } from "@/interfaces/specialists.interface";
import GET_SPECIALISTS from "@/gql/queries/specialists";
import Loader from "@/components/ui/shared/Loader";
import GET_TEST_CATEGORIES from "@/gql/queries/test-categories";
import {
  TestCategoriesResponse,
  TestCategoryProps,
} from "@/interfaces/test-categories.interface";
import Link from "next/link";
import slugify from "slugify";
import Image from "next/image";
import { ServerUrl } from "@/constants/server-url";
import { imageLoader } from "@/utils/loader";
import { EducationPreviewItem } from "@/interfaces/educations.interface";
import { useDebounce, useOnClickOutside } from "usehooks-ts";
import { Dropdown } from "rsuite";
import item from "@/components/screens/our-services/sections/item";

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

  const [items, setItems] = useState<TestCategoryProps[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryFilterRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  useOnClickOutside(categoryFilterRef, () => setOpen(false));
  useEffect(() => {
    if (data) {
      setItems(data.testCategories.data);
      const categoriesTemp: string[] = [];
      data.testCategories.data.map((test) =>
        categoriesTemp.push(test.attributes.category),
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
        data?.testCategories.data.filter((test) =>
          test.attributes.name
            .toLowerCase()
            .includes(debounceValue.toLowerCase()),
        ) || [],
      );
    } else {
      setItems(data?.testCategories.data || []);
    }
  }, [debounceValue]);
  function searchByCategory(category: string) {
    setItems(
      data?.testCategories.data.filter(
        (test) => test.attributes.category === category,
      ) || [],
    );
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>Testlər</title>
      </Head>
      <main className={"box"}>
        <div
          className={
            "flex justify-between items-center gap-2 mt-16  mb-10 max-[900px]:flex-col"
          }
        >
          <h3 className={" text-[#424242] text-[44px] font-bold"}>Testlər</h3>
          <div className={"flex justify-between gap-4 "}>
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
                "border px-4 py-2.5 w-[200px]   rounded-[6px] outline-none focus:border-primary hover:border-primary"
              }
            />
          </div>
        </div>
        <div className={"flex flex-col gap-5 mb-20"}>
          {items.map((category) => (
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
