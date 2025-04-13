import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const totalDuration = 30 * 1000; // 30 seconds in milliseconds

export default function Questions({ question, currentIndex, onNext, Last,setAnswers }) {
  const [blanks, setBlanks] = useState(["", "", "", ""]);
  const [remaining, setRemaining] = useState(totalDuration);
  const navigate = useNavigate();
  const { setScore } = useUser();

  // maintaining score and paging
  const handleNext = () => {
    setAnswers((prev) => [
      ...prev,
      {
        question: question.question,
        correctAnswer: question.correctAnswer,
        userAnswer: blanks,
      }
    ]);
    const score = blanks.reduce((acc, answer, index) => {
      const isCorrect =
        JSON.stringify(answer) === JSON.stringify(question?.correctAnswer[index]);
      return acc + (isCorrect ? 1 : 0);
    }, 0);
    console.log(score)
    if (score === 4) {
      setScore((prev) => prev + 1)
    }
    setBlanks(["", "", "", ""]);
    if (Last === 'true') {
      navigate("/dashboard");
    } else {
      onNext()
    }
  }

  // handling timeout
  useEffect(() => {
    let startTime = localStorage.getItem("questionStartTime");

    if (!startTime || localStorage.getItem("currentIndex") != currentIndex) {
      startTime = Date.now();
      localStorage.setItem("questionStartTime", startTime);
      localStorage.setItem("currentIndex", currentIndex);
    }

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remainingTime = totalDuration - elapsed;

      if (remainingTime <= 0) {
        handleNext();
        clearInterval(interval);
        localStorage.removeItem("questionStartTime");

      } else {
        setRemaining(remainingTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Filling the empty blank
  const handleOptionClick = (word) => {
    const insertBlank = [...blanks];
    const index = insertBlank.findIndex(val => val === "");
    if (index !== -1) {
      insertBlank[index] = word;
      setBlanks(insertBlank);
    }
  };

  //on Wrong fill Up 
  const handleBlankClick = (index) => {
    const updated = [...blanks];
    updated[index] = "";
    setBlanks(updated);
  };

  // rendering the sentence
  const renderSentence = () => {
    const parts = question?.question?.split("_____________");
    return parts?.map((part, index) => (
      <span key={index} className="mr-1">
        {part}
        {index < 4 && (
          <span
            onClick={() => handleBlankClick(index)}
            className={`inline-block border-b border-gray-500 min-w-[150px] cursor-pointer px-2 ${blanks[index] ? "text-blue-600 font-semibold" : "text-gray-400"
              }`}
          >
            {blanks[index] || ""}
          </span>
        )}
      </span>
    ));
  };

  return (
    <>
      <div className="absolute w-16 h-16 right-4 border border-blue-400 rounded-full overflow-hidden">
        <div
          className={`w-full h-full flex items-center justify-center text-md font-bold ${Math.ceil(remaining / 1000) <= 5 && "text-red-500"
            }`}>
          {Math.ceil(remaining / 1000)}s
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 p-4">
        <p className="mb-8 text-lg">{currentIndex + 1}.{renderSentence()}</p>

        <div className="grid grid-cols-2 gap-4">
          {question?.options?.map((opt, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded border 
              ${blanks.findIndex(item => item === opt) !== -1 ? 'hidden' : 'bg-white'}
              hover:bg-blue-200
            `}
              onClick={() => handleOptionClick(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          className={`${blanks.some((val) => val === null || val === "") ? "hidden" : ""
            } px-8 py-4 border border-blue-400 rounded-full hover:bg-blue-400 cursor-pointer`}
          onClick={() => handleNext()}
        >
          {Last === 'true' ? "Finish" : "Next"}
        </button>
      </div>
    </>
  );
}
