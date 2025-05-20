import React, { FC } from "react";
import { NewsPreviewItem } from "@/interfaces/news.interface";
import Image from "next/image";
import { ServerUrl } from "@/constants/server-url";
import dayjs from "dayjs";
import Link from "next/link";
import { imageLoader } from "@/utils/loader";

export interface NewsItemProps {
  type: "main" | "sub";
  data: NewsPreviewItem;
}

const NewsItem: FC<NewsItemProps> = ({ type, data }) => {
  if (type === "main") {
    return (
      <div>
        <Image
          loader={imageLoader}
          src={data?.attributes?.thumbnail?.data?.attributes?.url}
          alt={"main"}
          width={752}
          height={500}
          className={"rounded-[12px] mb-10 w-full h-[500px]"}
        />

        <div>
          <p className={"text-[#A1A1A1] font-semibold"}>
            {dayjs(data.attributes.date).format("DD.MM.YYYY")}
          </p>
          <h2 className={"text-[36px] font-bold text-[#424242] mb-4"}>
            {data.attributes.title}
          </h2>
          <p
            className={"line-clamp-2 leading-8 text-[#424242] font-medium mb-4"}
          >
            {data.attributes.description}
          </p>
          <Link
            href={`/news/${data.id}`}
            className={"text-[#486284] font-bold"}
          >
            Davamını Oxu
          </Link>
        </div>
      </div>
    );
  } else if (type === "sub") {
    return (
      <Link className={"flex gap-8  "} href={`/news/${data.id}`}>
        <Image
          loader={imageLoader}
          src={data?.attributes?.thumbnail?.data?.attributes?.url}
          alt={"main"}
          width={300}
          height={200}
          className={
            "rounded-[12px] mb-10 max-h-[200] min-w-[300px] max-w-[300px]"
          }
        />
        <div>
          <p className={"text-[#A1A1A1] text-14 mb-6"}>
            {dayjs(data.attributes.date).format("DD.MM.YYYY")}
          </p>
          <p className={"line-clamp-4 text-[#424242] font-bold"}>
            {data.attributes.title}
          </p>
        </div>
      </Link>
    );
  }
};

export default NewsItem;
