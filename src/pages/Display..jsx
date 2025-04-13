import React,{useState} from 'react';
import {  useNavigate } from 'react-router-dom'
import bulbswitcher from '../assets/bulb-switcher.png'
export default function Display() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // navigate to test page
  const handleTest = () => {
    navigate('/quiz',{replace:true})
  }

  return (
    <div className="max-w-3xl mx-auto p-4 flex flex-col items-center justify-center overflow-hidden">
      {/* <div className="w-[90%] md:w-[70%] lg:w-[30%] text-center"> */}
      <div className="w-20 h-20 " style={{ backgroundColor: "#FFD700", padding: "10px", borderRadius: "50%" }}>
        <img src={bulbswitcher} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-16">
        <div className="p-6 shadow-md rounded-lg text-center border border-gray-300 text-lg sm:text-xl">
          <div className="font-semibold">Time per Question</div>
          <div className="mt-2">30 Sec</div>
        </div>
        <div className="p-6 shadow-md rounded-lg text-center border border-gray-300 text-lg sm:text-xl">
          <div className="font-semibold">Total Questions</div>
          <div className="mt-2">10</div>
        </div>
      </div>

      <div className="w-full flex justify-evenly gap-4 mt-8">
        <button className="px-8 py-2 bg-violet-400 text-white rounded cursor-pointer hover:bg-blue-400">
          Back
        </button>
        <button className="px-8 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-400" onClick={() => setShowModal(true)}>
          Start
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-amber-50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-bold mb-4">Are you ready to begin?</h2>
            <p className="text-gray-600 mb-6">Once started, you can't go back until the quiz is completed.</p>
            <div className="flex justify-around">
              <button
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
                onClick={handleTest}
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}