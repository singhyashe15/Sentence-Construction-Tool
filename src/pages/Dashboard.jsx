import React, { useEffect } from "react";
import Confetti from "react-confetti";
import CircularScore from "../components/CircularScore.jsx"; // Assuming it's already defined
import { useUser } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { name, score } = useUser();
  const navigate = useNavigate();

  const isPerfectScore = score === 10;

  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div className="max-w-5xl mx-auto p-4 text-center  overflow-hidden">
      {isPerfectScore && <Confetti width={width} height={height} />}

      <div className="rounded-xl shadow-lg p-6 sm:p-8 bg-white border border-gray-200 mx-auto max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-700">
          Hello, {name}! 🎉
        </h1>

        <p className="text-xl sm:text-2xl mb-6 font-medium text-gray-700">
          Here's your quiz performance:
        </p>

        <div className="flex justify-center mb-8">
          <CircularScore score={score} maxPoints={10} />
        </div>

        <div className="text-lg sm:text-xl font-semibold text-gray-600">
          You scored <span className="text-blue-600">{score}</span> out of 10.
        </div>

        {isPerfectScore ? (
          <div className="mt-4 text-green-600 font-bold text-xl">
            🏆 Perfect Score! Amazing job!
          </div>
        ) : (
          <div className="mt-4 text-red-600 font-bold text-xl">
            Keep practicing to improve your skills!
          </div>
        )}
      </div>

      <button className="mt-4 px-8 py-4 text-xl text-blue-950 border border-blue-600 rounded-full cursor-pointer hover:bg-blue-500"
        onClick={() => navigate('/feedback')}>
        See Your Answer
      </button>
    </div>
  );
}
