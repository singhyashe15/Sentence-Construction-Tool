import React, { useEffect, useRef } from "react";
import { useUser } from "../context/UserContext";
import confetti from "canvas-confetti";

const CircularScore = ({ maxPoints }) => {
  const { point } = useUser();
  const hasCelebrated = useRef(false);

  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const progress = Math.min(point / maxPoints, 1); // Cap at 1
  const strokeDashoffset = circumference - progress * circumference;

  useEffect(() => {
    if (progress === 1 && !hasCelebrated.current) {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
      });
      hasCelebrated.current = true;
    }
  }, [progress]);

  return (
    <div className="flex flex-col items-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={point < 5 ? "#FF0000	" : "#3b82f6"}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.5s ease",
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="28"
          fill="#1f2937"
        >
          {point}
        </text>
      </svg>
    </div>
  );
};

export default CircularScore;
