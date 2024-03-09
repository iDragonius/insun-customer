import React, { FC } from "react";
import clsx from "clsx";
import { ContactItemProps } from "@/interfaces/contact.interface";
export type ContactProps = {
  id: number;
  label: string;
  contacts: string[];
  last: boolean;
};
export interface ContactItemComponentProps {
  data: ContactItemProps[];
  label: string;
}

const ContactItem: FC<ContactItemComponentProps> = ({ data, label }) => {
  return (
    <div className={"flex flex-col sm:flex-row  mt-5 sm:mt-0 sm:gap-[55px] "}>
      <h3 className={"w-[100px] sm:py-6 text-[#A1A1A1] font-semibold"}>
        {label}
      </h3>
      <div className={clsx("border-b  border-main py-3 sm:w-[300px] ")}>
        {data.map((contact) => (
          <p className={clsx(" mt-1 sm:my-3 font-semibold")} key={contact.id}>
            {contact.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactItem;
