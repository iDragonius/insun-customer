export interface ContactItemProps {
  id: string;
  value: string;
}

export interface ContactResponse {
  contactPage: {
    data: {
      id: string;
      attributes: {
        emails: ContactItemProps[];
        phoneNumbers: ContactItemProps[];
        addresses: ContactItemProps[];
      };
    };
    id: string;
  };
}
