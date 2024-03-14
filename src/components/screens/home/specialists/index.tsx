import SpecialistItem from "@/components/screens/home/specialists/specialist-item";
import { SpecialistItemProps } from "@/interfaces/home.interface";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

export interface SpecialistsProps {
  data: SpecialistItemProps[];
}

const Specialists: FC<SpecialistsProps> = ({ data }) => {
  const { t } = useTranslation("common");
  const [specialists, setSpecialists] = useState<SpecialistItemProps[]>([]);
  useEffect(() => {
    if (data.length > 3) {
      const temp: SpecialistItemProps[] = [];
      temp.push(data.find((el) => el.id === "14")!);
      for (let i = 0; i < 100; i++) {
        const specialistId = Math.floor(Math.random() * data.length);
        const possibleExistSpecialist = temp.find(
          (el) => +el.id === +data[specialistId].id,
        );

        if (!possibleExistSpecialist && specialistId !== 14) {
          temp.push(data[specialistId]);
        }

        if (temp.length === 3) {
          setSpecialists(temp);
          return;
        }
      }
    }
  }, [data]);
  return (
    <div className={"bg-[#A1D683] py-[80px]  "}>
      <div className={"box"}>
        <div
          className={
            "flex flex-col min-[700px]:flex-row justify-between items-center "
          }
        >
          <h3 className={"text-32 sm:text-[44px] mb-5 text-white font-bold-"}>
            {t("home_specialists")}
          </h3>
          <Link
            href={"/specialists"}
            className={
              "hidden min-[700px]:flex text-white border border-white text-20 font-bold w-[200px] h-[56px]  items-center justify-center rounded-[8px] trans hover:bg-white hover:text-primary-100"
            }
          >
            {t("all")}
          </Link>
        </div>
        <p className={"text-20 text-white mb-8"}>
          Dəyərini bildiyimiz mütəxəssislərimizin, Sizin də həyatınıza dəyər
          qatacağına inanırıq.
        </p>
        <div
          className={
            "grid  grid-cols-1 sm:grid-cols-2  min-[1000px]:grid-cols-3 gap-5 "
          }
        >
          {specialists.map((specialist) => (
            <SpecialistItem data={specialist} key={specialist.id} />
          ))}
        </div>
        <Link
          href={"/specialists"}
          className={
            " flex min-[700px]:hidden text-white border border-white text-20 font-bold w-full mt-8 h-[56px]  items-center justify-center rounded-[8px] trans hover:bg-white hover:text-primary-100"
          }
        >
          {t("all")}
        </Link>
      </div>
    </div>
  );
};

export default Specialists;
