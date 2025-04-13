import bulbswitcher from '../assets/bulb-switcher.png'
import { useNavigate } from 'react-router-dom'
export default function Display() {

  const navigate = useNavigate();

  // navigate to test page
  const handleTest = () => {
    navigate('/quiz')
  }
  return (
    <div className="max-w-3xl mx-auto p-4 flex flex-col items-center justify-center overflow-hidden">
      {/* <div className="w-[90%] md:w-[70%] lg:w-[30%] text-center"> */}
      <div className="w-20 h-20 " style={{ backgroundColor: "#FFD700", padding: "10px", borderRadius: "50%" }}>
        <img src={bulbswitcher} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <div className="p-6 shadow-md rounded-lg text-center border border-gray-300 text-lg sm:text-xl">
          <div className="font-semibold">Time per Question</div>
          <div className="mt-2">30 Sec</div>
        </div>
        <div className="p-6 shadow-md rounded-lg text-center border border-gray-300 text-lg sm:text-xl">
          <div className="font-semibold">Total Questions</div>
          <div className="mt-2">10</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <button className="px-6 py-2 bg-violet-400 text-white rounded hover:bg-violet-500 w-full sm:w-auto">
          Back
        </button>
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto"
          onClick={handleTest}
        >
          Start
        </button>
      </div>
      {/* </div> */}
    </div>
  )
}