"use client";

import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import useQuestions from "@/hooks/useQuestions";
import { useContext, useEffect } from "react";
import { StateProvider } from "@/context/StateContext";

export default function Home() {
  const { diff, inputVal, category, setDiff, setInputVal, setCategory } =
    useContext(StateProvider);

  const router = useRouter();
  const handleNavigation = (e: any) => {
    e.preventDefault();

    router.push("/assesment");
  };

  const { categories, getCategories } = useQuestions();

  useEffect(() => {
    getCategories();
  }, []);
  // console.log(categories);

  return (
    <main className="relative px-4 flex items-center justify-center top-1/2 -translate-y-1/2">
      <div className="setup-card">
        <h2 className="text-center text-white text-xl md:text-2xl font-semibold">
          Quiz App
        </h2>
        <div className="w-full">
          <form onSubmit={handleNavigation} className="">
            <div className="quiz-setup-div">
              <label className="text-white text-md" htmlFor="catergory">
                Category
              </label>
              <select
                required
                className="select-option"
                value={category}
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((item: { id: number; name: string }) => {
                  const { id, name } = item;

                  return (
                    <option
                      key={id}
                      className="appearance-none py-2"
                      value={id}
                    >
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="quiz-setup-div">
              <label className="text-white text-md" htmlFor="difficulty">
                Difficulty Level
              </label>
              <select
                required
                className="select-option"
                value={diff}
                id="difficulty"
                onChange={(e) => setDiff(e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="quiz-setup-div">
              <label className="text-white text-md" htmlFor="questions">
                No of Questions
              </label>
              <input
                required
                className="select-option"
                type="number"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
            </div>

            <Button>Start Quiz</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
