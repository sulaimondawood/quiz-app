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
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  //   const getQuestions = async () => {
  //     try {
  //       const data = await fetchQuizQuestions(amount, category, difficulty);
  //       setCategories(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  return {
    categories,
    questions,
    getCategories,
    // getQuestions,
  };
};

export default useQuestions;
