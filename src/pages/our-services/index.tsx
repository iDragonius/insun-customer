import React, { FC, useRef } from "react";
import Head from "next/head";
import Banner from "@/components/screens/our-services/Banner";
import PsychologistService from "@/components/screens/our-services/PsychologistService";
import CoachingService from "@/components/screens/our-services/CoachingService";
import DietitianService from "@/components/screens/our-services/DietitianService";
import YogaService from "@/components/screens/our-services/YogaService";
import ThetaHealing from "@/components/screens/our-services/ThetaHealing";
import AccessBar from "@/components/screens/our-services/AccessBar";
import GroupTherapies from "@/components/screens/our-services/GroupTherapies";
import Sections from "@/components/screens/our-services/sections";
import { useWindowSize } from "usehooks-ts";

export interface OurServicesPageProps {}

const OurServicesPage: FC<OurServicesPageProps> = () => {
  const psychologistRef = useRef<HTMLDivElement>();
  const coachingRef = useRef<HTMLDivElement>();
  const dietitianRef = useRef<HTMLDivElement>();
  const yogaRef = useRef<Element>();
  const thetaHealingRef = useRef<Element>();
  const accessBarRef = useRef<Element>();
  const groupTherapiesRef = useRef<Element>();
  const { width } = useWindowSize();
  return (
    <>
      <Head>
        <title>Xidmmətlərimiz</title>
      </Head>
      <main>
        <Banner />
        {width >= 1440 && (
          <div className={"box  "}>
            <Sections
              psychologistRef={
                psychologistRef as React.MutableRefObject<HTMLDivElement>
              }
              coachingRef={
                coachingRef as React.MutableRefObject<HTMLDivElement>
              }
              dietitianRef={
                dietitianRef as React.MutableRefObject<HTMLDivElement>
              }
              yogaRef={yogaRef as React.MutableRefObject<HTMLDivElement>}
              thetaHealingRef={
                thetaHealingRef as React.MutableRefObject<HTMLDivElement>
              }
              accessBarRef={
                accessBarRef as React.MutableRefObject<HTMLDivElement>
              }
              groupTherapiesRef={
                groupTherapiesRef as React.MutableRefObject<HTMLDivElement>
              }
            />
          </div>
        )}

        <PsychologistService
          sectionRef={psychologistRef as React.MutableRefObject<HTMLDivElement>}
        />
        <CoachingService
          sectionRef={coachingRef as React.MutableRefObject<HTMLDivElement>}
        />
        <DietitianService
          sectionRef={dietitianRef as React.MutableRefObject<HTMLDivElement>}
        />
        <YogaService
          sectionRef={yogaRef as React.MutableRefObject<HTMLDivElement>}
        />
        <ThetaHealing
          sectionRef={thetaHealingRef as React.MutableRefObject<HTMLDivElement>}
        />
        <AccessBar
          sectionRef={accessBarRef as React.MutableRefObject<HTMLDivElement>}
        />
        <GroupTherapies
          sectionRef={
            groupTherapiesRef as React.MutableRefObject<HTMLDivElement>
          }
        />
      </main>
    </>
  );
};

export default OurServicesPage;
