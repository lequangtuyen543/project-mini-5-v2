import { useEffect, useState } from "react";
import { getQuestionsList } from "../../services/questionsService";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Form, Radio, Button } from 'antd';
import { getTopicById } from "../../services/topicService";
import { getCookie } from "../../helpers/cookie";
import { createAnswer } from "../../services/quizService";

const { Title } = Typography;

export const Quiz = () => {
  const [data, setData] = useState([]);
  const [topic, setTopic] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTopicById(params.id);
      setTopic(res);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getQuestionsList(params.id);
      setData(res);
    }
    fetchData();
  }, []);

  const onFinish = async values => {
    console.log('Success:', values);
    let selectedAnswers = [];
    for (let key in values) {
      selectedAnswers.push({
        questionId: key,
        answer: parseInt(values[key])
      });
    }

    let options = {
      userId: parseInt(getCookie("id")),
      topicId: parseInt(params.id),
      answers: selectedAnswers
    }

    const res = await createAnswer(options);
    if(res){
      navigate("/results/"+res.id);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  console.log("data", data);

  return (
    <>
      <h1>Quiz for Topic: {topic.name}</h1>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        {data.map((question, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <Title level={4}>
              Question {index + 1}: {question.question}
            </Title>

            <Form.Item
              name={question.id}
              rules={[{ required: true, message: 'Please input your answer!' }]}
            >
              <Radio.Group key={index} vertical>
                {question.answers.map((answer, indexAnswer) => (
                  <Radio
                    value={answer}
                    id={`quiz-${question.id}-${indexAnswer}`}
                    key={indexAnswer}
                    style={{ display: 'block', marginInlineStart: 12 }}
                  >
                    {answer}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          </div>
        ))}

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form >
    </>
  )
};