import React, { useState, useEffect } from "react"

const totalDuration = 30 * 1000;

export default function Questions({ question,setCurrentIndex,currentIndex,total, onNext, Last }) {
  const [blanks, setBlanks] = useState(["", "", "", ""]);
  const [remaining, setRemaining] = useState(totalDuration);

  useEffect(() => {
    const startTime = parseInt(localStorage.getItem("questionStartTime"));
  const interval = setInterval(() => {
    const elapsedMs = Date.now() - startTime;
    const elapsedSec = Math.floor(elapsedMs / 1000);
    
    if (elapsedSec >= totalDuration) {
      clearInterval(interval);
      localStorage.removeItem("questionStartTime");
      if (currentIndex < total - 1) {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1;
          localStorage.setItem("currentIndex", nextIndex);
          return nextIndex;
        });
      }
    } else {
      setRemaining(elapsedSec);
    }
  }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);


  const handleOptionClick = (words) => {
    console.log(words)
    // setBlanks(words);
    // console.log(blanks)
  };

  const handleBlankClick = (index) => {
    const updated = [...blanks];
    updated[index] = "";
    setBlanks(updated);
  };

  const renderSentence = () => {
    const parts = question?.question.split("_____________");
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

  const handleSubmit = () => {
    console.log("oj")
  }
  return (
    <>
      <div className="absolute w-16 h-16 right-4 border border-blue-400  overflow-hidden rounded-full">
        {/* Time Display */}
        <div className={`w-full h-full flex items-center justify-center text-md font-bold ${Math.ceil(remaining / 1000) <= 5 && "text-red-500"} cursor-pointer`}>
          {Math.ceil(remaining / 1000)}s
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-10 p-4">
        <p className="mb-8 text-lg">{renderSentence()}</p>

        <div className="flex justify-between">
          {question?.options?.map((opt, idx) => (
            <button
              key={idx}
              className="border rounded-xl p-3 bg-white hover:bg-blue-100  shadow cursor-pointer"
              onClick={() => handleOptionClick(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <div >
        <button className={`${blanks.some(val => val === null || val === "") ? "hidden" : ""} px-8 py-4 border border-blue-400 rounded-full hover:bg-blue-400 cursor-pointer`}
          onClick={onNext}
          onSubmit={() => Last && handleSubmit()}
        >
          {Last ? "Finish" : "Next"}
        </button>
      </div>
    </>
  );
}