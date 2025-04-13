import { FaLightbulb, FaQuestionCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
export default function Display() {

  const navigate = useNavigate();
  const handleTest = ()=>{
    navigate('/quiz')
  }
  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-[90%] md:w-[70%] lg:w-[30%] text-center">
        <div className="relative w-12 h-12 ">
          <FaLightbulb size={80} className="absolute top-0 left-0 w-full h-full text-yellow-500" />
          <FaQuestionCircle className="absolute top-2 left-2 w-6 h-6 text-blue-950 " />
        </div>

        <div className='flex flex-col md:flex-row justify-between mt-16'>
          <div className='p-8 shadow-sm rounded-lg text-2xl text-center border border-gray-300 '>Time per Questions
            <div>30Sec</div>
          </div>
          <div className='p-8 shadow-md rounded-lg text-2xl text-center border border-gray-300'>
            Total Questions
            <div>10</div>
          </div>
        </div>

        <div className="w-full flex justify-evenly gap-4 mt-8">
          <button className="px-8 py-2 bg-violet-400 text-white rounded cursor-pointer hover:bg-blue-400">
            Back
          </button>
          <button className="px-8 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-400" onClick={handleTest}>
            Start
          </button>
        </div>
      </div>
    </div>
  )
}