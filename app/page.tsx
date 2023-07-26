export default function Home() {
  return (
    <main className="relative flex items-center justify-center">
      <div className="setup-card">
        <h2 className="text-center text-white text-2xl font-semibold">
          Quiz App
        </h2>
        <div className="w-full">
          <form className="">
            <div className="quiz-setup-div">
              <label className="text-white text-md" htmlFor="catergory">
                Category
              </label>
              <select name="category" id="category">
                <option value="">Randdom</option>
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
            <button className="bg-blue-600 hover:bg-blue-800 text-blue-100 rounded-md w-full p-4 mt-8">
              Start Quiz
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
