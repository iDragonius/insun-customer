import Languages from "@/components/layout/ui/header/languages";
import NavigationItem from "@/components/layout/ui/header/navigation/navigation-item";
import ApplicationModal from "@/components/ui/shared/ApplicationModal";
import { NavigationProps } from "@/interfaces/layout.interface";
import useTranslation from "next-translate/useTranslation";
import { FC, useState } from "react";

export interface NavigationComponentProps {
  data: NavigationProps;
}
const NavigationData: Array<{
  label: string;
  url: string;
  subs?: {
    url: string;
    label: string;
  }[];
}> = [
  { label: "Xidmətlərimiz", url: "/our-services", subs: [] },
  {
    label: "Haqqımızda",
    url: "/about-us",
    subs: [
      {
        label: "Haqqımızda",
        url: "/info",
      },
      {
        label: "Məqsəd və dəyərlərimiz",
        url: "/our-mission-and-our-vision",
      },
      {
        label: "Rəhbərin müraciəti",
        url: "/heads-appeal",
      },
    ],
  },
  {
    label: "Əlaqə",
    url: "/contact",
    subs: [],
  },
  {
    label: "Mütəxəssislər",
    url: "/specialists",
    subs: [],
  },
];

const Navigation: FC<NavigationComponentProps> = ({ data }) => {
  return (
    <div className={" items-center gap-6 hidden min-[1050px]:flex"}>
      {data.data.attributes.navigations.map((navigationItem) => {
        if (navigationItem.status) {
          return (
            <NavigationItem data={navigationItem} key={navigationItem.id} />
          );
        }
      })}
      <Languages />

      <GetAppointmentButton />
    </div>
  );
};

export const GetAppointmentButton = () => {
  const { t } = useTranslation("common");
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      {isOpen && (
        <ApplicationModal toggle={() => setOpen((prevState) => !prevState)} />
      )}
      <button
        onClick={() => setOpen(true)}
        className={
          "text-white bg-primary px-2 py-3  min-[1100px]:w-max w-full  rounded-[4px] trans hover:ring-4 hover:ring-opacity-70 hover:ring-primary "
        }
      >
        {t("get_appointment")}
      </button>
    </>
  );
};

export default Navigation;
