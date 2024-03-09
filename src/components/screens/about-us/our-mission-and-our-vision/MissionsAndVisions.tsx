import React, { FC } from "react";
import MissionAndVisionItem from "@/components/screens/about-us/our-mission-and-our-vision/MissionAndVisionItem";
import { InfoItemProps } from "@/interfaces/our-mission-and-our-vision.interface";
import useTranslation from "next-translate/useTranslation";
export type MissionAndVisionItemProps = {
  id: number;
  title: string;
  description: string;
};
export interface MissionsAndVisionsProps {
  data: { missions: InfoItemProps[]; visions: InfoItemProps[] };
}

const MissionsAndVisions: FC<MissionsAndVisionsProps> = ({ data }) => {
  const { t } = useTranslation("common");
  return (
    <div className={"box mb-20"}>
      <MissionAndVisionItem label={t("missions")} data={data.missions} />
      <MissionAndVisionItem label={t("visions")} data={data.visions} />
    </div>
  );
};

export default MissionsAndVisions;
