import { useEffect, useState } from "react";
import { getAnswersList } from "../../services/answersService";
import { getQuestionsList } from "../../services/questionsService";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Radio, Button, Typography, Tag } from 'antd';
import { getCookie } from "../../helpers/cookie";
import { createAnswer } from "../../services/quizService";

const { Title } = Typography;

function Result() {
  const [data, setData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const dataAnswers = await getAnswersList(params.id);
      const dataQuestions = await getQuestionsList(dataAnswers.topicId);

      console.log(dataAnswers);
      console.log(dataQuestions);

      let resultFinal = []
      for (let i = 0; i < dataQuestions.length; i++) {
        resultFinal.push({
          ...dataQuestions[i],
          ...dataAnswers.answers.find((item) => item.questionId == dataQuestions[i].id)
        });
      }
      setData(resultFinal);
    }
    fetchData();
  }, []);

  console.log("data", data);

  return (
    <div>
      <h1>Result</h1>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="vertical"
      >
        {data.map((question, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <Title level={4}>
              Question {index + 1}: {question.question}
            </Title>
            {question.answer === question.correctAnswer ? (
              <Tag color={'green'}>Your answer is correct!</Tag>
            ) : (
              <Tag color={'red'}>Your answer is incorrect!</Tag>
            )}

            <Form.Item
              name={question.id}
              rules={[{ required: true, message: 'Please input your answer!' }]}
            >
              <Radio.Group key={index} vertical>
                {question.answers.map((answer, indexAnswer) => {
                  let className = "";
                  if (indexAnswer === question.answer)
                    className = "red";
                  if (indexAnswer === question.correctAnswer)
                    className = "green";
                  return (
                    <Radio
                      value={indexAnswer}
                      id={`quiz-${question.id}-${indexAnswer}`}
                      key={indexAnswer}
                      style={{ display: 'block', marginInlineStart: 12, color: className }}
                    >
                      {answer}
                    </Radio>
                  )
                })}
              </Radio.Group>
            </Form.Item>
          </div>
        ))}
      </Form >
    </div>
  );
};

export default Result;