import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getAnswersByUserId } from '../../services/answersService';
import { getTopicList } from '../../services/topicService';
import { Link } from 'react-router-dom'

export const Answers = () => {
  const [dataAnswers, setDataAnswers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const answersByUserId = await getAnswersByUserId();
      const topicList = await getTopicList();

      let result = [];
      for (let i = 0; i < answersByUserId.length; i++) {
        result.push({
          ...topicList.find((topic) => topic.id == answersByUserId[i].topicId),
          ...answersByUserId[i]
        })
      }

      console.log(result);
      setDataAnswers(result.reverse());
    }
    fetchApi();
  }, []);

  const columns = [
    {
      title: "No",
      key: "index",
      render: (_, __, index) => index + 1, // index bắt đầu từ 0
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Topic Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
      render: (_, render) => <Link to={`/result/${render.id}`}>Details</Link>,
    },
  ];

  return (
    <>
      <h1>Answers List</h1>

      <Table columns={columns} dataSource={dataAnswers} />
    </>
  );
} 