export interface InfoItemProps {
  title: string;
  description: string;
}

export interface OurMissionAndOurVisionResponse {
  ourMissionAndOurVision: {
    data: {
      id: string;
      attributes: {
        missions: InfoItemProps[];
        visions: InfoItemProps[];
      };
    };
  };
}
