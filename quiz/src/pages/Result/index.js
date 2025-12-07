import { use, useEffect, useState } from "react";
import { getAnswersList } from "../../services/answersService";
import { getQuestionsList } from "../../services/questionsService";
import { useParams } from "react-router-dom";

function Result() {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
     const dataAnswers = await getAnswersList(params.id);
     const dataQuestions = await getQuestionsList(dataAnswers.topicId);

     console.log(dataAnswers);
     console.log(dataQuestions);

     let resultFinal = []
     for(let i=0; i<dataQuestions.length; i++){
       resultFinal.push({
         ...dataQuestions[i],
         ...dataAnswers.answers.find((item) => item.questionId == dataQuestions[i].id)
       });
     }
     setData(resultFinal);
    }
    fetchData();
  }, []);

  console.log("result data", data);

  return (
    <div>
      <h1>Result</h1>
    </div>
  );
};

export default Result;