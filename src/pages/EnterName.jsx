import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";
import toast from "react-hot-toast";

const EnterName = () => {
  const {name,setName } = useUser(); //storing the name in useContext Hook
  const navigate = useNavigate();

  // handle the submit buttton
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() && name !== null) {
      navigate("/display",{replace:true}); // Navigate to sentence quiz
    } else {
      toast.error("Enter your name first");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-16 p-4 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-xl font-bold mb-4">Welcome to Sentence Construction Tool</h1>
      <div className="p-8 flex flex-col bg-white shadow-md rounded-lg text-center border border-gray-300 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Enter Your Name</h2>
        <input //enter your name
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Your name"
        />
        <button //submit the name
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EnterName;
