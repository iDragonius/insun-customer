import React, { FC, ReactNode } from "react";
import clsx from "clsx";

export interface MainBlockProps {
  children: ReactNode;
  color: string;
  size: 1 | 2;
}

const MainBlock: FC<MainBlockProps> = ({ children, color, size }) => {
  return (
    <div style={{ backgroundColor: color }} className={"py-[100px] "}>
      <div className={"box"}>
        <div
          className={clsx(
            "  ml-auto  ",
            size === 1 ? "mb:w-[864px]" : "mb:w-[976px]",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
