"use client";

import Button from "@/component/button/Button";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleNavigation = (e: any) => {
    e.preventDefault();
    router.push("/assesment");
  };
  return (
    <main className="relative flex items-center justify-center top-1/2 -translate-y-1/2">
      <div className="setup-card">
        <h2 className="text-center text-white text-2xl font-semibold">
          Quiz App
        </h2>
        <div className="w-full">
          <form onSubmit={handleNavigation} className="">
            <div className="quiz-setup-div">
              <label className="text-white text-md" htmlFor="catergory">
                Category
              </label>
              <select className="select-option" name="category" id="category">
                <option className="appearance-none py-2" value="">
                  Randdom
                </option>
                <option value="">Randdom</option>
                <option value="">Randdom</option>
              </select>
            </div>

            <div className="quiz-setup-div">
              <label className="text-white text-md" htmlFor="difficulty">
                Difficulty Level
              </label>
              <select className="select-option" name="category" id="category">
                <option value="">Randdom</option>
                <option value="">Randdom</option>
                <option value="">Randdom</option>
              </select>
            </div>
            <div className="quiz-setup-div">
              <label className="text-white text-md" htmlFor="questions">
                No of Questions
              </label>
              <select className="select-option" name="category" id="questions">
                <option value="">Randdom</option>
                <option value="">Randdom</option>
                <option value="">Randdom</option>
              </select>
            </div>

            <Button>Start Quiz</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
