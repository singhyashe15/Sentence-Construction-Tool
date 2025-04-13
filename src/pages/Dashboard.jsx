import React from "react"
import { useUser } from "../context/UserContext.jsx";
import CircularScore from "../components/CircularScore.jsx";
export default function Dashboard() {
  const { name, point } = useUser();
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <div className=" rounded-lg text-2xl text-center border border-gray-300 ">
        <span className="block">
          Hello {name}
        </span>
        <div className="text-xl font-semibold mt-6">
        <span className="font-cursive">Your Score is</span>
        <CircularScore maxPoints={10}/>
        </div>
      </div>
    </div>
  )
}