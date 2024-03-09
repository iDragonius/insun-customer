import React, { FC, useCallback, useEffect, useState } from "react";
import SectionItem from "@/components/screens/our-services/sections/item";

export interface SectionsProps {
  psychologistRef: React.MutableRefObject<HTMLDivElement>;
  coachingRef: React.MutableRefObject<HTMLDivElement>;
  dietitianRef: React.MutableRefObject<HTMLDivElement>;
  yogaRef: React.MutableRefObject<HTMLDivElement>;
  thetaHealingRef: React.MutableRefObject<HTMLDivElement>;
  accessBarRef: React.MutableRefObject<HTMLDivElement>;
  groupTherapiesRef: React.MutableRefObject<HTMLDivElement>;
}

export type SectionItemProps = {
  id: number;
  label: string;
  ref: React.MutableRefObject<HTMLDivElement>;
};

const Sections: FC<SectionsProps> = ({
  psychologistRef,
  coachingRef,
  yogaRef,
  dietitianRef,
  groupTherapiesRef,
  thetaHealingRef,
  accessBarRef,
}) => {
  const [active, setActive] = useState<number>(1);
  const SectionsData: SectionItemProps[] = [
    { id: 1, label: "Psixoloq xidməti", ref: psychologistRef },
    { id: 2, label: "Kouçinq xidməti", ref: coachingRef },
    { id: 3, label: "Dietoloq xidməti", ref: dietitianRef },
    { id: 4, label: "Yoqa xidməti", ref: yogaRef },
    { id: 5, label: "Theta Healing", ref: thetaHealingRef },
    { id: 6, label: "Access Bars", ref: accessBarRef },
    { id: 7, label: "Qrup Terapiyaları", ref: groupTherapiesRef },
  ];
  const [scrollY, setScrollY] = useState<number>(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      if (
        y >= psychologistRef.current.offsetTop &&
        y <
          psychologistRef.current.offsetTop +
            psychologistRef.current.offsetHeight
      ) {
        setActive(1);
      } else if (
        y > coachingRef.current.offsetTop &&
        y < coachingRef.current.offsetTop + coachingRef.current.offsetHeight
      ) {
        setActive(2);
      } else if (
        y >= dietitianRef.current.offsetTop &&
        y <= dietitianRef.current.offsetTop + dietitianRef.current.offsetHeight
      ) {
        setActive(3);
      } else if (
        y >= yogaRef.current.offsetTop &&
        y <= yogaRef.current.offsetTop + yogaRef.current.offsetHeight
      ) {
        setActive(4);
      } else if (
        y > thetaHealingRef.current.offsetTop &&
        y <
          thetaHealingRef.current.offsetTop +
            thetaHealingRef.current.offsetHeight
      ) {
        setActive(5);
      } else if (
        y > accessBarRef.current.offsetTop &&
        y < accessBarRef.current.offsetTop + accessBarRef.current.offsetHeight
      ) {
        setActive(6);
      } else if (
        y > groupTherapiesRef.current.offsetTop &&
        y <
          groupTherapiesRef.current.offsetTop +
            groupTherapiesRef.current.offsetHeight
      ) {
        setActive(7);
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={
        "flex flex-col h-max mt-20   z-[1000] py-8 bg-[#F8FFF8] w-[304px] min-w-[304px] "
      }
      style={{
        position: scrollY > 600 ? "fixed" : "absolute",
        top: scrollY > 600 ? "128px" : "",
      }}
    >
      {SectionsData.map((section) => (
        <SectionItem data={section} key={section.id} active={active} />
      ))}
    </div>
  );
};

export default Sections;
