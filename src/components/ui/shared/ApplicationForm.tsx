import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { createDefaultMaskGenerator, MaskedInput } from "react-hook-mask";
import { useMutation } from "@apollo/client";
import CREATE_SERVICE_FORM from "@/gql/mutations/service-form.mutation";
import CREATE_CONTACT_FORM from "@/gql/mutations/contact-form.mutation";
import CREATE_SPECIALIST_FORM from "@/gql/mutations/specialist-form.mutation";
import { EmailPattern } from "@/constants/patterns";
import useTranslation from "next-translate/useTranslation";
const maskGenerator = createDefaultMaskGenerator("99 999 99 99");
export interface ApplicationFormProps {
  formRef?: React.MutableRefObject<HTMLDivElement | null>;
  type: "contact" | "specialist";
  specialist?: string;
}
export interface ApplicationErrorProps {
  firstName: null | string;
  lastName: null | string;
  phoneNumber: null | string;
  email: null | string;
  message: null | string;
}
export interface ApplicationDataProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;
}
const ApplicationForm: FC<ApplicationFormProps> = ({
  formRef,
  specialist,
  type,
}) => {
  const { t } = useTranslation("common");
  const [data, setData] = useState<ApplicationDataProps>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ApplicationErrorProps>({
    firstName: null,
    lastName: null,
    phoneNumber: null,
    email: null,
    message: null,
  });
  const [success, setSuccess] = useState<boolean>(false);
  const changeData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const maskChange = (data: string) => {
    setData((prevState) => ({
      ...prevState,
      phoneNumber: data,
    }));
  };

  const [createContactForm] = useMutation(CREATE_CONTACT_FORM);
  const [createSpecialistForm] = useMutation(CREATE_SPECIALIST_FORM);
  const createForm = (e: FormEvent) => {
    e.preventDefault();
    let hasError = false;
    setSuccess(false);
    const errorsTemp: ApplicationErrorProps = {
      firstName: null,
      lastName: null,
      phoneNumber: null,
      email: null,
      message: null,
    };
    if (data.firstName.trim().length < 2) {
      errorsTemp.firstName = "Adınızı düzgün daxil edin!";
      hasError = true;
    }
    if (data.lastName.trim().length < 4) {
      errorsTemp.lastName = "Soyadınızı düzgün daxil edin!";
      hasError = true;
    }
    if (data.phoneNumber.length !== 9) {
      errorsTemp.phoneNumber = "Telefon nömrəsini düzgün daxil edin!";
      hasError = true;
    }
    if (!EmailPattern.test(data.email)) {
      errorsTemp.email = "Elektron poçtu düzgün daxil edin!";
      hasError = true;
    }

    if (hasError) {
      setErrors(errorsTemp);
      return;
    }
    if (type === "contact") {
      createContactForm({
        variables: { ...data },
      }).then((res) => {
        if (res.data.createContactForm.data.id !== null) {
          setSuccess(true);
          setData({
            firstName: "",
            lastName: "",
            message: "",
            email: "",
            phoneNumber: "",
          });
        }
      });
    } else {
      createSpecialistForm({
        variables: {
          ...data,
          specialist: specialist,
        },
      }).then((res) => {
        if (res.data.createSpecialistForm.data.id !== null) {
          setSuccess(true);
          setData({
            firstName: "",
            lastName: "",
            message: "",
            email: "",
            phoneNumber: "",
          });
        }
      });
    }
  };
  return (
    <div
      className={"bg-primary border-b  border-b-[#367702] py-14  "}
      id={"form"}
      ref={formRef}
    >
      <div className={"boxM"}>
        <h2
          className={
            "text-white text-24 min-[700px]:text-[36px]  font-bold mb-4"
          }
        >
          {t("application_form_title")}
        </h2>
        <p
          className={"text-[#E3FFCC] text-18 min-[700px]:text-24 font-semibold"}
        >
          {t("application_form_description")}
        </p>

        <form>
          <div className={"min-[700px]:w-[640px]"}>
            <div
              className={
                "min-[700px]:flex-row flex-col flex min-[700px]:items-center gap-6 my-6 "
              }
            >
              <Field
                type={"text"}
                label={t("application_form_name_label")}
                placeholder={t("application_form_name_placeholder")}
                value={data.firstName}
                onChange={changeData}
                name={"firstName"}
                error={errors.firstName}
              />
              <Field
                type={"text"}
                label={t("application_form_surname_label")}
                placeholder={t("application_form_surname_placeholder")}
                value={data.lastName}
                onChange={changeData}
                name={"lastName"}
                error={errors.lastName}
              />
            </div>
            <div
              className={
                "  min-[700px]:flex-row flex-col flex min-[700px]:items-center gap-6 my-6"
              }
            >
              <Field
                type={"phone"}
                label={t("application_form_phone_label")}
                placeholder={t("application_form_phone_placeholder")}
                value={data.phoneNumber}
                onChange={changeData}
                name={"phoneNumber"}
                maskChange={maskChange}
                error={errors.phoneNumber}
              />
              <Field
                type={"email"}
                label={t("application_form_email_label")}
                placeholder={t("application_form_email_placeholder")}
                value={data.email}
                onChange={changeData}
                name={"email"}
                error={errors.email}
              />
            </div>
            <div className={"w-full my-6"}>
              <Field
                type={"textarea"}
                label={t("application_form_message_label")}
                placeholder={t("application_form_message_placeholder")}
                value={data.message}
                onChange={changeData}
                name={"message"}
                error={errors.message}
              />
            </div>
          </div>

          <button
            onClick={createForm}
            className={
              " py-4 w-full min-[700px]:w-[500px] bg-white text-primary rounded-[4px] trans hover:ring-4 hover:ring-white hover:ring-opacity-70"
            }
          >
            {t("apply")}
          </button>
          {success && (
            <h2
              className={
                "text-white text-32 font-semibold text-center w-full mt-5"
              }
            >
              Müraciət uğurla göndərildi !
            </h2>
          )}
        </form>
      </div>
    </div>
  );
};
const Field = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  name,
  maskChange,
  error,
}: {
  type: "text" | "phone" | "email" | "textarea";
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
  maskChange?: (data: string) => void;
  error: null | string;
}) => {
  return (
    <div className={"flex flex-col relative w-full"}>
      <label className={"text-[12px] font-bold text-white mb-1"}>{label}</label>
      {type === "textarea" && (
        <textarea
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          className={
            "py-3 px-6 bg-transparent h-[108px]   placeholder:text-white  border border-[#88BE5D] rounded-[4px] w-full placeholder:font-medium outline-none trans hover:ring-2 hover:ring-[#88BE5D] hover:ring-opacity-70 focus:ring-2 focus:ring-[#88BE5D] focus:ring-opacity-100 text-white"
          }
        />
      )}
      {type === "text" && (
        <input
          value={value}
          onChange={onChange}
          name={name}
          type={"text"}
          placeholder={placeholder}
          className={
            "py-3 px-6 bg-transparent h-12  placeholder:text-white  border border-[#88BE5D] rounded-[4px] min-[700px]:w-[304px] placeholder:font-medium outline-none trans hover:ring-2 hover:ring-[#88BE5D] hover:ring-opacity-70 focus:ring-2 focus:ring-[#88BE5D] focus:ring-opacity-100 text-white"
          }
        />
      )}
      {type === "email" && (
        <input
          value={value}
          onChange={onChange}
          name={name}
          type={"email"}
          placeholder={placeholder}
          className={
            "py-3 px-6 bg-transparent  h-12 placeholder:text-white  border border-[#88BE5D] rounded-[4px] min-[700px]:w-[304px] placeholder:font-medium outline-none trans hover:ring-2 hover:ring-[#88BE5D] hover:ring-opacity-70 focus:ring-2 focus:ring-[#88BE5D] focus:ring-opacity-100 text-white"
          }
        />
      )}
      {type === "phone" && (
        <MaskedInput
          value={value}
          onChange={maskChange}
          name={name}
          maskGenerator={maskGenerator}
          placeholder={placeholder}
          className={
            "py-3 px-6 bg-transparent h-12  placeholder:text-white border border-[#88BE5D] rounded-[4px] min-[700px]:w-[304px] placeholder:font-medium outline-none trans hover:ring-2 hover:ring-[#88BE5D] hover:ring-opacity-70 focus:ring-2 focus:ring-primary focus:ring-opacity-100 text-white"
          }
        />
      )}
      {error && (
        <p className={"mt-1 text-red-200 text-14 font-medium "}>{error}</p>
      )}
    </div>
  );
};
export default ApplicationForm;
