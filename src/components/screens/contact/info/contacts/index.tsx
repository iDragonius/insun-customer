import React, { FC } from "react";
import ContactItem, {
  ContactProps,
} from "@/components/screens/contact/info/contacts/contact-item";
import { ContactResponse } from "@/interfaces/contact.interface";
import useTranslation from "next-translate/useTranslation";

export interface ContactsProps {
  data: ContactResponse;
}

const Contacts: FC<ContactsProps> = ({ data }) => {
  const { t } = useTranslation("common");
  return (
    <div>
      <ContactItem
        data={data.contactPage.data.attributes.addresses}
        label={t("contact_addresses")}
      />{" "}
      <ContactItem
        data={data.contactPage.data.attributes.phoneNumbers}
        label={t("contact_phones")}
      />{" "}
      <ContactItem
        data={data.contactPage.data.attributes.emails}
        label={t("contact_emails")}
      />
    </div>
  );
};

export default Contacts;
