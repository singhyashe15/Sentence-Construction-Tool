import React from "react";

export default function CircularScore({ score, maxPoints}) {
  const percentage = (score / maxPoints) * 100;
  const strokeDasharray = 283;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

  return (
    <div className="relative w-40 h-40">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="#e5e7eb"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="#4f46e5"
          strokeWidth="10"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-blue-700">
        {score}/{maxPoints}
      </div>
    </div>
  );
}
