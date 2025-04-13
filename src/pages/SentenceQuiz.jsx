import React,{useState} from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import Questions from "../components/Questions";
export default function SentenceQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Fetching the data from json file
  const fetchQuestion = async () => {
    const res = await axios.get("https://json-server-api-okj6.onrender.com/api");
    console.log(res.data.data.questions)
    return res.status === 200 ? res.data.data.questions : []
  }
  // useQuery to store the data in cache
  const { data } = useQuery({
    queryKey: ["Questions"],
    queryFn: fetchQuestion,
    staleTime: Infinity
  })

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <>
      {data && data.length > 0 && currentIndex < data.length && (
        <Questions
          question={data[currentIndex]}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          total={data.length}
          onNext={handleNext}
          Last={currentIndex === data.length -1 ? 'true' : 'false'}
        />
      )}
    </>

  )
}