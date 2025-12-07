import { useEffect, useState } from "react";
import { getQuestionsList } from "../../services/questionsService";
import { useParams } from "react-router-dom";
import { Typography, Form, Radio } from 'antd';

const { Title } = Typography;

export const Quiz = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getQuestionsList(params.id);
      setData(res);
    }
    fetchData();
  }, []);

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  console.log("data", data);

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
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
              <Radio.Group key={index} style={{ display: 'block', marginBottom: '10px' }}>
                {question.answers.map((answer, indexAnswer) => (
                  <Radio value={answer} id={`quiz-${question.id}-${indexAnswer}`} key={indexAnswer}>
                    {answer}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          </div>
        ))}
      </Form >
    </>
  )
};