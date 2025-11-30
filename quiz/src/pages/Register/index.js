import { Button, Card, Form, Input, message } from 'antd';
import './Register.scss';
import { checkExist, login, register } from '../../services/usersService';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkLogin } from '../../actions/login';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../../helpers/cookie.js';
import generateToken from '../../helpers/generateToken.js';

export const Register = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadings, setLoadings] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async values => {
    setLoadings(true);
    try {
      const checkExistEmail = await checkExist('email', values.email);

      if (checkExistEmail.length > 0) {
        messageApi.open({
          type: 'error',
          content: 'Email already exists!',
        });
        return;
      }

      values.token = generateToken();
      const res = await register(values);

      if (res) {
        messageApi.open({
          type: 'success',
          content: 'Register successful',
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        messageApi.open({
          type: 'error',
          content: 'Register failed. Please try again.',
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      messageApi.open({
        type: 'error',
        content: 'An error occurred during registration. Please try again later.',
      });
    } finally {
      setLoadings(false);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {contextHolder}
      <Card title="Register" style={{ maxWidth: 600 }}
      >
        <Form
          form={form}
          name="basic"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}          
          style={{ width: 450 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: 'Please input your fullName!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" loading={loadings}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card >

    </>
  )
}