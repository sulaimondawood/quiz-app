"use client";

import { StateProvider } from "@/context/StateContext";
import useQuestions from "@/hooks/useQuestions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Assesment = () => {
  const [currentQue, setCurrentQue] = useState(0);
  const [checked, setChecked] = useState(true);
  const [showResult, setShowresult] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );
  const router = useRouter();

  //context
  const { isLoading, modifiedQues } = useContext(StateProvider);

  const handleQuestions = () => {
    setSelectedOptionIndex(null);
    setChecked(true);
    if (currentQue + 1 === modifiedQues.length) {
      setShowresult(true);
      console.log(showResult);
    } else {
      setCurrentQue((prev) => {
        return prev + 1;
      });
    }
  };

  const handleAnswerSelection = (
    selectedAnswer: string,
    optionIndex: number
  ) => {
    // Store the selected answer in the userAnswers state using the current question index as the key
    setUserAnswers((prevUserAnswers) => ({
      ...prevUserAnswers,
      [currentQue]: selectedAnswer,
    }));

    setSelectedOptionIndex(optionIndex);
    setChecked(false);
  };

  const calculateScore = () => {
    let score = 0;
    modifiedQues.forEach((question: any, index: number) => {
      if (userAnswers[index] === question.correct_answer) {
        score++;
      }
    });
    return score;
  };

  const handleReset = () => {
    router.push("/");
  };

  const { getQuestions } = useQuestions();

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <article className="px-4 relative top-1/2 -translate-y-1/2">
      <div className="setup-card ">
        {showResult ? (
          <div className="">
            <h1 className="text-white text-2xl  text-center pb-4">
              Your score is :
            </h1>
            <h1 className="text-3xl font-semibold text-center text-white">
              {calculateScore()}
            </h1>
            <button className="btn">
              <Link href="/">Take a new test</Link>
            </button>
          </div>
        ) : (
          <div className="">
            <div className="mt-4">
              <h1 className="text-gray-300 font-medium text-lg">
                Question {currentQue + 1}
              </h1>
              <h3 className="text-md text-gray-100 pt-4 text-xs md:text-sm">
                {isLoading ? "Loading..." : modifiedQues[currentQue]?.question}
              </h3>
              <div className="mt-10 ">
                {isLoading ? (
                  <p className="text-white text-center"> please wait...</p>
                ) : (
                  <div className="flex flex-col gap-4">
                    {modifiedQues[currentQue].options?.map(
                      (item: any, index: number) => {
                        return (
                          <label
                            key={index}
                            className={
                              selectedOptionIndex === index
                                ? "checked"
                                : "question"
                            }
                          >
                            <input
                              className="hidden"
                              type="radio"
                              name="answer"
                              value={item}
                              onChange={(e) => {
                                handleAnswerSelection(e.target.value, index);
                              }}
                              checked={userAnswers[currentQue] === item}
                            />
                            {item}
                          </label>
                        );
                      }
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center gap-8 align-items-center">
              <button
                disabled={checked}
                onClick={handleQuestions}
                className="btn disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
              >
                {currentQue === modifiedQues?.length ? "Submit" : "Next"}
              </button>
              <button
                onClick={handleReset}
                className="bg-red-600 hover:bg-red-800 text-red-100 rounded-md w-full p-3 md:p-4 mt-8"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default Assesment;
