import React, { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import Loader from "@/components/ui/shared/Loader";
import { GET_TEST } from "@/gql/queries/test";
import {
  AnswerProps,
  QuestionProps,
  TestResponse,
} from "@/interfaces/test.interface";
import { useOnClickOutside, useScreen } from "usehooks-ts";
import { createDefaultMaskGenerator, MaskedInput } from "react-hook-mask";
import { Cross } from "@/components/icons";
import ApplicationModal from "@/components/ui/shared/ApplicationModal";
import clsx from "clsx";
import TestResultMutation from "@/gql/mutations/test-result.mutation";
const maskGenerator = createDefaultMaskGenerator("99 999 99 99");

export interface TestPageProps {}

const TestPage: FC<TestPageProps> = () => {
  const { query, isReady } = useRouter();
  const { data, loading, error } = useQuery<TestResponse>(GET_TEST, {
    skip: !isReady,
    variables: {
      locale: "az",
      id: (query.test as string).split("-").at(-1),
    },
  });
  const [isApplicationOpen, setApplicationOpen] = useState<boolean>(false);
  const [isResultShow, setResultShow] = useState<boolean>(false);
  const [isPhoneNumberPopupOpen, setPhoneNumberPopupOpen] =
    useState<boolean>(false);
  const [result, setResult] = useState<{
    score: number | null;
    feedback: string;
  }>({
    score: null,
    feedback: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, AnswerProps>
  >({});
  const popupRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(popupRef, () => setPhoneNumberPopupOpen(false));
  const [mutateFunction] = useMutation(TestResultMutation);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>ERROR</div>;
  }
  return (
    <>
      {isPhoneNumberPopupOpen && (
        <div
          className={
            "fixed top-0 left-0 bg-black bg-opacity-40 w-full h-full flex items-center justify-center z-[501]"
          }
        >
          <div
            ref={popupRef}
            className={"p-5 rounded-[8px] w-[400px] bg-white"}
          >
            <div className={"flex justify-between gap-1"}>
              <h2 className={"text-18 font-medium mb-2"}>
                Testin cavabını görmək üçün telefon nömrənizi qeyd edin!
              </h2>
              <Cross
                className={"w-7 h-7 cursor-pointer"}
                onClick={() => setPhoneNumberPopupOpen(false)}
              />
            </div>

            <MaskedInput
              value={phoneNumber}
              onChange={(value) => {
                setPhoneNumber(value);
              }}
              maskGenerator={maskGenerator}
              placeholder={"50 321 32 32"}
              className={
                "w-full outline-none py-3 px-4 rounded-[6px] border mt-2"
              }
            />
            <button
              onClick={() => {
                if (phoneNumber.length !== 9) return;
                setResultShow(true);
                setPhoneNumberPopupOpen(false);
                const temp: { score: number; feedback: string } = {
                  score: 0,
                  feedback: "",
                };

                let result = "";
                Object.entries(selectedAnswers).map(
                  ([questionId, answerData]) => {
                    temp.score += answerData.score;
                    result += `${data?.test.data.attributes.questions.find(
                      (el) => el.id === questionId,
                    )?.text}:${answerData.text}   \n`;
                  },
                );
                temp.feedback =
                  data?.test.data.attributes.results.find(
                    (el) => el.max >= temp.score && temp.score >= el.min,
                  )?.result || "";
                mutateFunction({
                  variables: {
                    phoneNumber,
                    result,
                    score: temp.score,
                    feedback: temp.feedback,
                  },
                });
                setResult(temp);
              }}
              disabled={phoneNumber.length !== 9}
              className={clsx(
                "w-full bg-primary text-white py-2.5 mt-3 rounded-[6px] px-4 trans hover:bg-primary-hover",
                phoneNumber.length !== 9 && "!bg-gray-300",
              )}
            >
              Göndər
            </button>
          </div>
        </div>
      )}
      {isApplicationOpen && (
        <ApplicationModal
          toggle={() => setApplicationOpen((prevState) => !prevState)}
        />
      )}
      <Head>
        <title>{data?.test.data.attributes.name}</title>
      </Head>
      {isResultShow ? (
        <main className={"box mb-20"}>
          <div className={"w-[600px] mx-auto mt-10"}>
            <h1 className={"text-32 font-medium mb-6"}>
              Sizin nəticəniz:{" "}
              <span className={"text-primary font-semibold "}>
                {result.score}
              </span>{" "}
            </h1>
            <p className={"mb-10 text-20"}>{result.feedback}</p>
            <button
              onClick={() => setApplicationOpen(true)}
              className={
                "bg-primary text-white w-full py-3 rounded-[6px] text-18 trans hover:bg-primary-hover"
              }
            >
              Görüş al
            </button>
          </div>
        </main>
      ) : (
        <main className={"box mb-20"}>
          <h1 className={"mt-10 text-32 font-semibold text-primary mb-6"}>
            {data?.test.data.attributes.name}
          </h1>
          <div className={"flex flex-col gap-5 mb-16"}>
            {data?.test.data.attributes.questions.map((question) => (
              <Question
                data={question}
                key={question.id}
                selectedAnswers={selectedAnswers}
                setSelectedAnswers={setSelectedAnswers}
              />
            ))}
          </div>
          <button
            onClick={() => {
              const errorsTemp: Record<string, string> = {};
              // Object.entries(selectedAnswers).map(([questionId,answerData]))
              setPhoneNumberPopupOpen((prevState) => !prevState);
            }}
            className={
              "px-4 py-3 rounded-[6px] bg-primary text-white hover:bg-primary-hover trans w-[250px] text-18 font-semibold"
            }
          >
            Testi bitir
          </button>
        </main>
      )}
    </>
  );
};

const Question = ({
  data,
  setSelectedAnswers,
  selectedAnswers,
}: {
  data: QuestionProps;
  selectedAnswers: Record<string, AnswerProps>;
  setSelectedAnswers: Dispatch<SetStateAction<Record<string, AnswerProps>>>;
}) => {
  return (
    <div>
      <p className={"text-20 font-medium mb-3"}>{data.text}</p>
      <div className={"flex flex-col gap-3"}>
        {data.answers.map((answer) => (
          <Answer
            data={answer}
            key={answer.id}
            questionId={data.id}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        ))}
      </div>
    </div>
  );
};

const Answer = ({
  data,
  questionId,
  selectedAnswers,
  setSelectedAnswers,
}: {
  data: AnswerProps;
  questionId: string;
  selectedAnswers: Record<string, AnswerProps>;
  setSelectedAnswers: Dispatch<SetStateAction<Record<string, AnswerProps>>>;
}) => {
  return (
    <div className={"flex gap-3 items-center"}>
      <input
        className={"accent-primary w-5 h-5"}
        type={"radio"}
        id={data.id}
        name={questionId}
        checked={selectedAnswers[questionId]?.id === data.id}
        onClick={(e) => {
          console.log(e.currentTarget.checked);
          setSelectedAnswers((prevState) => ({
            ...prevState,
            [questionId]: data,
          }));
        }}
      />
      <label className={"text-18"} htmlFor={data.id}>
        {data.text}
      </label>
    </div>
  );
};
export default TestPage;
