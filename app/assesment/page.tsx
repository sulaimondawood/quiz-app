"use client";

import { StateProvider } from "@/context/StateContext";
import useQuestions from "@/hooks/useQuestions";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const Assesment = () => {
  const [currentQue, setCurrentQue] = useState(0);
  const [checked, setChecked] = useState(null);
  const [showResult, setShowresult] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );

  //context
  const { isLoading, modifiedQues } = useContext(StateProvider);

  const handleQuestions = () => {
    if (currentQue + 1 === modifiedQues.length) {
      setShowresult(true);
      console.log(showResult);
    } else {
      setCurrentQue((prev) => {
        return prev + 1;
      });
    }
    console.log(currentQue);
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
            <div className="mt-6">
              <h1 className="text-gray-300 font-medium text-lg">
                Question {currentQue + 1}
              </h1>
              <h3 className="text-md text-gray-100 pt-4 text-xs md:text-sm">
                {isLoading ? "Loading..." : modifiedQues[currentQue]?.question}
              </h3>
              <div className="mt-10 ">
                {isLoading ? (
                  "Loading..."
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

            <button onClick={handleQuestions} className="btn">
              {currentQue === modifiedQues?.length ? "Submit" : "Next"}
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default Assesment;
