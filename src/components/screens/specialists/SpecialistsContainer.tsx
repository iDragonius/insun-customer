import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { SearchIcon } from "@/components/icons";
import { SpecialistProps } from "@/components/screens/home/specialists/specialist-item";
import specialist1 from "@/assets/home/specialsit1.jpg";
import specialist2 from "@/assets/home/specialist2.jpg";
import specialist3 from "@/assets/home/specialist3.jpg";
import SpecialistItem from "@/components/screens/specialists/SpecialistItem";
import { SpecialistItemProps } from "@/interfaces/home.interface";
import specialist from "@/gql/queries/specialist";
import useTranslation from "next-translate/useTranslation";

export interface SpecialistsContainerProps {
  data: SpecialistItemProps[];
}

const SpecialistsContainer: FC<SpecialistsContainerProps> = ({ data }) => {
  const { t } = useTranslation("common");
  const [search, setSearch] = useState<string>("");
  const [sortedData, setSortedData] = useState<SpecialistItemProps[]>(data);
  useEffect(() => {
    if (search.trim().length === 0) {
      setSortedData(data);
    }
    const temp: SpecialistItemProps[] = [];
    data.map((specialist) => {
      if (
        specialist.attributes.fullName
          .toLowerCase()
          .trim()
          .includes(search.toLowerCase().trim())
      ) {
        temp.push(specialist);
      }
    });
    setSortedData(temp);
  }, [search]);
  return (
    <div className={"box mt-20 mb-[100px] "}>
      <div
        className={
          "flex  min-[900px]:flex-row flex-col   min-[900px]:gap-0 gap-4 items-center justify-between mb-16"
        }
      >
        <h2
          className={
            "text-primary-100 text-16 min-[300px]:text-24 sm:text-32 mb:text-[44px] font-bold "
          }
        >
          {t("specialists")}
        </h2>
        <div className={"sm:w-[400px] border border-main relative "}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("specialist_search")}
            className={
              "outline-none w-full py-[10px] pl-6  pr-16 placeholder:text-bodyText placeholder:font-medium font-medium text-bodyText rounded-[4px] trans hover:ring-4 hover:ring-primary hover:ring-opacity-70 focus:ring-4 focus:ring-primary focus:ring-opacity-70"
            }
          />
          <SearchIcon className={"absolute right-5 top-3"} />
        </div>
      </div>
      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 min-[1000px]:grid-cols-3 gap-5 sm:gap-7  mb:gap-14"
        }
      >
        {sortedData.map((specialist) => (
          <SpecialistItem data={specialist} key={specialist.id} />
        ))}
      </div>
    </div>
  );
};

export default SpecialistsContainer;
