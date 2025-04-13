import React, { useState, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Questions from "../components/Questions";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setAnswers, setScore } = useUser();
  const navigate = useNavigate();

  // Fetching the data from JSON API
  const fetchQuestion = async () => {
    const res = await axios.get("https://json-server-api-okj6.onrender.com/api");
    return res.status === 200 ? res.data.data.questions : [];
  };
  // To store the data in cache
  const { data: questions, isLoading } = useQuery({
    queryKey: ["Questions"],
    queryFn: fetchQuestion,
    staleTime: Infinity
  });

  // Load saved progress (if any)
  useEffect(() => {
    const savedIndex = localStorage.getItem("currentIndex");
    if (savedIndex && !isNaN(savedIndex)) {
      setCurrentIndex(parseInt(savedIndex));
    }
  }, []);

  // Save progress on index change
  useEffect(() => {
    localStorage.setItem("currentIndex", currentIndex);
  }, [currentIndex]);

  // Avoid back button
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ""; // Required for Chrome
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  
  // When quiz is finished, navigate to feedback
  const handleFinish = () => {
    navigate("/feedback");
  };

  // Handle next question or finish
  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      handleFinish();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Reset previous answers and score on mount
  useEffect(() => {
    setAnswers([]);
    setScore(0);
  }, []);

  if (isLoading) return <div className="text-center mt-10">Loading Questions...</div>;

  return (
    <>
      {questions && questions.length > 0 && currentIndex < questions.length && (
        <Questions
          question={questions[currentIndex]}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          total={questions.length}
          onNext={handleNext}
          Last={currentIndex === questions.length - 1 ? 'true' : 'false'}
          setAnswers={setAnswers} // Add this to store answers
        />
      )}
    </>
  );
}
