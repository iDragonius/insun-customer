import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { createDefaultMaskGenerator, MaskedInput } from "react-hook-mask";
import { useLockedBody, useOnClickOutside } from "usehooks-ts";
import { CaretDownIcon, SuccessIcon } from "@/components/icons";
import clsx from "clsx";
import { useMutation } from "@apollo/client";
import CREATE_SERVICE_FORM from "@/gql/mutations/service-form.mutation";
import { EmailPattern } from "@/constants/patterns";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
const maskGenerator = createDefaultMaskGenerator("99 999 99 99");
export interface ApplicationModalProps {
  toggle: () => void;
}
export interface ApplicationDataProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  service: string | null;
  message: string;
}
export interface ApplicationErrorProps {
  firstName: null | string;
  lastName: null | string;
  phoneNumber: null | string;
  email: null | string;
  service: string | null;
  message: null | string;
}
const ServicesData: string[] = [
  "services_PsychologistService",
  "services_CoachingService",
  "services_DietitianService",
  "services_YogaService",
  "services_ThetaHealing",
  "services_AccessBar",
  "services_GroupTherapies",
];
const ApplicationModal: FC<ApplicationModalProps> = ({ toggle }) => {
  const { t } = useTranslation("common");
  const modalRef = useRef<null | HTMLDivElement>(null);
  useLockedBody(true, "root");
  useOnClickOutside(modalRef, toggle);
  const [data, setData] = useState<ApplicationDataProps>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    service: null,
    message: "",
  });
  const [errors, setErrors] = useState<ApplicationErrorProps>({
    firstName: null,
    lastName: null,
    phoneNumber: null,
    email: null,
    service: null,
    message: null,
  });
  const [mutateFunction] = useMutation(CREATE_SERVICE_FORM);
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
  const [success, setSuccess] = useState<boolean>(false);
  const createForm = (e: FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const errorsTemp: ApplicationErrorProps = {
      firstName: null,
      lastName: null,
      phoneNumber: null,
      email: null,
      service: null,
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
    if (!data.service) {
      errorsTemp.service = "Xidmət sahəsi seçin!";
      hasError = true;
    }
    if (hasError) {
      setErrors(errorsTemp);
      return;
    }
    mutateFunction({
      variables: {
        ...data,
      },
    }).then((res) => {
      if (res.data.createServiceForm.data.id !== null) {
        setSuccess(true);
        setData({
          firstName: "",
          lastName: "",
          message: "",
          email: "",
          phoneNumber: "",
          service: null,
        });
      }
    });
  };
  if (success) {
    return (
      <div
        className={
          "fixed w-full h-full top-0 left-0  bg-black bg-opacity-40 flex items-center justify-center "
        }
      >
        <div
          className={
            "w-[300px] bg-white flex flex-col items-center justify-center rounded-[10px]"
          }
          ref={modalRef}
        >
          <SuccessIcon className={"-mt-10"} />
          <h3
            className={
              "my-6 font-semibold text-[#7C8691] text-24 leading-7 text-center"
            }
          >
            Müraciət uğurla göndərildi
          </h3>
          <div className={"px-6 py-3 bg-[#F1F5F8] w-full rounded-b-[10px]"}>
            <Link
              href={"/"}
              onClick={toggle}
              className={
                "w-full bg-[#13C39C] block text-white py-3 text-center rounded-[4px]"
              }
            >
              Əsas səhifə
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={
        "fixed w-full h-full top-0 left-0 bg-black bg-opacity-40 flex items-center justify-center"
      }
    >
      <div
        className={"pt-10 pb-8 min-[700px]:px-8 px-4 bg-white"}
        ref={modalRef}
      >
        <div className={"min-[700px]:w-[640px] "}>
          <h2
            className={
              "text-24 text-bodyText font-bold  leading-[64px] text-center"
            }
          >
            Müraciət etmək istəyirsən?
          </h2>
          <p
            className={"leading-7 font-medium text-[#707070] text-center mb-6"}
          >
            Məlumatları doldur və sizinlə ən qısa <br /> zamanda əlaqə saxlayaq
          </p>
          <form action="">
            <div
              className={
                " flex min-[700px]:flex-row flex-col items-center gap-6 my-6"
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
                "  flex min-[700px]:flex-row flex-col  items-center gap-6 my-6"
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
            <div>
              <Select
                label={t("application_form_service_label")}
                placeholder={t("application_form_service_placeholder")}
                data={ServicesData}
                value={data.service}
                error={errors.service}
                change={(data) =>
                  setData((prevState) => ({
                    ...prevState,
                    service: data,
                  }))
                }
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
            <button
              onClick={createForm}
              className={
                "w-full text-white bg-primary py-4 leading-8 font-bold rounded-[4px] hover:ring-4 hover:ring-primary hover:ring-opacity-70 trans"
              }
            >
              {t("apply")}
            </button>
          </form>
        </div>
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
      <label className={"text-[12px] font-bold text-bodyText mb-1"}>
        {label}
      </label>
      {type === "textarea" && (
        <textarea
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          className={
            "py-3 px-6 bg-transparent h-[108px]   placeholder:text-bodyText  border border-main rounded-[4px] w-full placeholder:font-medium outline-none trans hover:ring-2 hover:ring-[#88BE5D] hover:ring-opacity-70 focus:ring-2 focus:ring-[#88BE5D] focus:ring-opacity-100 text-bodyText"
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
            "py-3 px-6 bg-transparent h-12  placeholder:text-bodyText  border border-main rounded-[4px] min-[700px]:w-[304px] placeholder:font-medium outline-none trans hover:ring-2 hover:ring-[#88BE5D] hover:ring-opacity-70 focus:ring-2 focus:ring-[#88BE5D] focus:ring-opacity-100 text-bodyText"
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
            "py-3 px-6 bg-transparent  h-12 placeholder:text-bodyText  border border-main rounded-[4px] min-[700px]:w-[304px] placeholder:font-medium outline-none trans hover:ring-2 hover:ring-[#88BE5D] hover:ring-opacity-70 focus:ring-2 focus:ring-[#88BE5D] focus:ring-opacity-100 text-bodyText"
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
            "py-3 px-6 bg-transparent h-12  placeholder:text-bodyText border border-main rounded-[4px] min-[700px]:w-[304px] placeholder:font-medium outline-none trans hover:ring-2 hover:ring-[#88BE5D] hover:ring-opacity-70 focus:ring-2 focus:ring-primary focus:ring-opacity-100 text-bodyText"
          }
        />
      )}
      {error && (
        <p className={"mt-1 text-red-500 text-14 font-medium "}>{error}</p>
      )}
    </div>
  );
};

const Select = ({
  placeholder,
  label,
  data,
  value,
  change,
  error,
}: {
  placeholder: string;
  label: string;
  data: string[];
  change: (data: string) => void;
  value: null | string;
  error: null | string;
}) => {
  const { t } = useTranslation("common");
  const [isOpen, setOpen] = useState<boolean>(false);
  const selectRef = useRef<null | HTMLDivElement>(null);
  useOnClickOutside(selectRef, () => setOpen(false));
  return (
    <div className={"flex flex-col relative"}>
      <label className={"text-[12px] font-bold text-bodyText mb-1"}>
        {label}
      </label>
      <div
        onClick={() => {
          if (isOpen) return;
          setOpen((prevState) => !prevState);
        }}
        className={
          "cursor-pointer w-full  h-12 border border-main rounded-[4px] py-2 px-6 font-medium flex justify-between items-center text-bodyText leading-8 trans hover:ring-2 hover:ring-[#88BE5D] hover:ring-opacity-70 group hover:text-primary"
        }
      >
        <span
          className={
            "w-[150px] min-[300px]:w-[200px] min-[700px]:w-full truncate"
          }
        >
          {value ?? placeholder}
        </span>
        <CaretDownIcon className={"fill-bodyText group-hover:fill-primary"} />
      </div>
      {isOpen && (
        <div
          ref={selectRef}
          className={
            "absolute bg-white top-[72px] border w-full py-1 rounded-[4px] z-[100]"
          }
        >
          {data.map((el) => (
            <div
              onClick={() => {
                change(t(el));
                setOpen(false);
              }}
              key={el}
              className={clsx(
                "py-2 trans  cursor-pointer  px-6",
                el === value
                  ? "bg-primary-hover text-white"
                  : "hover:text-primary-hover",
              )}
            >
              {t(el)}
            </div>
          ))}
        </div>
      )}
      {error && (
        <p className={"mt-1 text-red-500 text-14 font-medium"}>{error}</p>
      )}
    </div>
  );
};
export default ApplicationModal;
