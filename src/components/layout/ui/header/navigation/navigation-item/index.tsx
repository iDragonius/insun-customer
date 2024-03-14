import React, { FC, useRef, useState } from "react";
import { CaretDownIcon } from "@/components/icons";
import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";
import { useOnHoverOutside } from "@/hooks/useOnHoverOutside";
import { NavigationElementProps } from "@/interfaces/layout.interface";

export interface NavigationItemProps {
  data: NavigationElementProps;
}

const NavigationItem: FC<NavigationItemProps> = ({ data }) => {
  const { pathname } = useRouter();
  const [isShown, setShown] = useState<boolean>(false);
  const dropdownRef = useRef<null | HTMLDivElement>(null);
  useOnHoverOutside(dropdownRef, () => setShown(false));
  return (
    <>
      {data.subs!.length > 0 ? (
        <div className={"relative group"} ref={dropdownRef}>
          <div
            onMouseOver={() => setShown(true)}
            className={clsx(
              pathname.includes(data.path)
                ? "text-primary font-bold"
                : "font-medium",
              "flex gap-1 text-navText items-center trans hover:text-primary cursor-pointer h-full",
              isShown && "text-primary",
            )}
          >
            <p>{data.label}</p>
            {data.subs!.length > 0 && (
              <CaretDownIcon
                className={clsx(
                  pathname.includes(data.path)
                    ? "fill-primary "
                    : "fill-navText",
                  isShown && "rotate-180 fill-primary ",
                  "group-hover:rotate-180 group-hover:fill-primary",
                )}
              />
            )}
          </div>
          {isShown && (
            <div
              className={
                "bg-white border border-[#DADADA] px-4 py-5 absolute flex flex-col rounded-[4px] gap-4 "
              }
            >
              {data.subs?.map((sub) => {
                if (sub.status) {
                  return (
                    <Link
                      href={data.path + sub.path}
                      key={sub.path}
                      className={clsx(
                        pathname.includes(sub.path)
                          ? "text-primary font-bold"
                          : "font-medium",
                        "text-navText min-w-max trans hover:text-primary",
                      )}
                    >
                      {sub.label}
                    </Link>
                  );
                }
              })}
            </div>
          )}
        </div>
      ) : (
        <Link
          href={data.path}
          className={clsx(
            "flex gap-2 text-navText items-center trans hover:text-primary cursor-pointer ",
            pathname === data.path ? "text-primary font-bold" : "font-medium",
          )}
        >
          <p>{data.label}</p>
          {data.subs!.length > 0 && (
            <CaretDownIcon className={"fill-navText"} />
          )}
        </Link>
      )}
    </>
  );
};

export default NavigationItem;
