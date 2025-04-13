import bulbswitcher from '../assets/bulb-switcher.png'
import { useNavigate } from 'react-router-dom'
export default function Display() {

  const navigate = useNavigate();
  const handleTest = ()=>{
    navigate('/quiz')
  }
  return (
    <div className="max-w-3xl mx-auto p-4 flex flex-col items-center justify-center overflow-hidden">
      {/* <div className="w-[90%] md:w-[70%] lg:w-[30%] text-center"> */}
        <div className= "w-20 h-20 " style={{ backgroundColor: "#FFD700", padding: "10px", borderRadius: "50%" }}>
         <img src={bulbswitcher}/>
        </div>

        <div className='grid grid-cols-2 gap-4 mt-16'>
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
      {/* </div> */}
    </div>
  )
}