"use client";

import React, { useContext, useState } from "react";
import fetchCategories from "@/helpers/fetchCategories";
import fetchQuizQuestions from "@/helpers/fetchQuizQuestions";
import { StateProvider } from "@/context/StateContext";

const useQuestions = () => {
  const [questions, setQuestions] = useState<any>([]);
  const [categories, setCategories] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const {
    diff,
    inputVal,
    category,

    setIsLoading,
    modifiedQues,
    setModifiedQues,
  } = useContext(StateProvider);

  const getCategories = async () => {
    try {
      const data = await fetchCategories();
      console.log(data);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Helper function to shuffle an array (Fisher-Yates algorithm)
  const shuffleArray: any = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  //
  const getQuestions = async () => {
    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=${inputVal}&category=${category}&difficulty=${diff}`
      );
      const data = await res.json();

      // Process the API response to format questions and options
      const formattedQuestions = data.results.map((apiQuestion: any) => {
        // Combine correct and incorrect answers into options array
        const options = [
          ...apiQuestion.incorrect_answers,
          apiQuestion.correct_answer,
        ];

        const shuffledOptions = shuffleArray(options);

        return {
          question: apiQuestion.question,
          correct_answer: apiQuestion.correct_answer,
          options: shuffledOptions,
        };
      });

      // console.log(formattedQuestions);

      setModifiedQues(formattedQuestions);
      setIsLoading(false);
      console.log(modifiedQues);
    } catch (error) {
      console.error("Error fetching question", error);
    }
  };

  return {
    categories,
    questions,
    getCategories,
    getQuestions,
  };
};

export default useQuestions;
