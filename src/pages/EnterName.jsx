import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";
import toast from "react-hot-toast";

const EnterName = () => {
  const { name, setName } = useUser();
  const navigate = useNavigate();
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim()) {
      toast.success(`Hello, ${name}! Let's begin 🚀`);
      navigate("/display", { replace: true });
    } else {
      toast.error("Please enter your name first!");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-16 p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        👋 Welcome to the Sentence Construction Quiz
      </h1>

      <div
        className={`p-8 bg-white shadow-md rounded-lg border w-full max-w-md text-center transition-all duration-300 ${
          shake ? "animate-shake" : ""
        }`}
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Enter Your Name to Get Started
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Guest"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />

          {name && (
            <p className="text-sm text-green-600 mt-2">
              👍 Hi <strong>{name}</strong>! Ready to test your skills?
            </p>
          )}

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition cursor-pointer"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnterName;
