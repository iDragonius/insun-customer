export interface AboutInfoSubItemProps {
  title: string;
  description: string;
}
export interface AboutInfoResponse {
  aboutInfo: {
    data: {
      id: string;
      attributes: {
        mainDescription: string;
        mainTitle: string;
        subInfos: AboutInfoSubItemProps[];
      };
    };
  };
}
