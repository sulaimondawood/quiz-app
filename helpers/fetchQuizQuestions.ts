export const quizQuestions = async (
  amount: number,
  category: any,
  difficulty: any
) => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
  );

  const data = await res.json();
  console.log(data);

  return data.results;
};

export default quizQuestions;
