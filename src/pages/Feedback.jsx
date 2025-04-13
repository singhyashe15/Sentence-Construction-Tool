import React, { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { CheckCircle, XCircle } from "lucide-react";

export default function Feedback() {
  const { answers,score } = useUser(); // Assuming answers is an array of objects

  useEffect(() => {
    console.log(answers);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6 border border-amber-200">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">📋 Quiz Feedback</h2>
          <div className="text-center text-xl font-semibold text-gray-700">
            Your Score: <span className="text-green-600">{score}</span> / {answers.length}
          </div>
        </div>

        <div className="space-y-6">
          {answers.map((answer, index) => {
            const isCorrect = JSON.stringify(answer.userAnswer) === JSON.stringify(answer.correctAnswer);
            return (
              <div
                key={index}
                className={`rounded-xl shadow-sm p-5 border-l-8 ${isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Question {index + 1}</h3>
                  {isCorrect ? (
                    <CheckCircle className="text-green-600 w-6 h-6" />
                  ) : (
                    <XCircle className="text-red-600 w-6 h-6" />
                  )}
                </div>

                <p className="text-gray-800 mb-2"><span className="font-medium">Sentence:</span> {answer.question}</p>

                <p className="text-gray-700">
                  <span className="font-medium">Your Answer:</span>{" "}
                  <span className="text-blue-600">
                    {answer.userAnswer?.join(", ") || "N/A"}
                  </span>
                </p>

                <p className="text-gray-700">
                  <span className="font-medium">Correct Answer:</span>{" "}
                  <span className="text-green-600">
                    {answer.correctAnswer?.join(", ")}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
