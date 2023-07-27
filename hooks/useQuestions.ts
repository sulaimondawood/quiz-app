"use client";

import React, { useState } from "react";
import fetchCategories from "@/helpers/fetchCategories";
import fetchQuizQuestions from "@/helpers/fetchQuizQuestions";

const useQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const data = await fetchCategories();
      console.log(data);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getQuestions = async (
    category: string,
    diff: string,
    amount: number
  ) => {
    try {
      const data = await fetchQuizQuestions(amount, category, diff);
      setQuestions(data);
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
