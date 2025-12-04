import { useEffect, useState } from "react";
import { getTopicList } from "../../services/topicService";
import { Table } from 'antd';
import { Link } from "react-router-dom";

export const Topic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTopicList();
      setData(result);
    }
    fetchData();
  }, []);
  console.log(data);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
      render: (text, record) => (<>
        <Link to={`/quiz/${record.id}`}>Do quiz</Link>
      </>)
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <>
      <h1 className="mb-5">Topic List</h1>

      <Table columns={columns} dataSource={data} />
    </>
  );
};