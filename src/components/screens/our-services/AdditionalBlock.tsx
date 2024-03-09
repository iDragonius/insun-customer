import React, { FC, ReactNode } from "react";

export interface AdditionalBlockProps {
  children: ReactNode;
}

const AdditionalBlock: FC<AdditionalBlockProps> = ({ children }) => {
  return (
    <div className={" flex justify-between box"}>
      <div />
      <div className={"max-w-[1040px] w-[1040px]"}>{children}</div>
    </div>
  );
};

export default AdditionalBlock;
