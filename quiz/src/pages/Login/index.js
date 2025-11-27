import { Button, Card, Checkbox, Form, Input, message } from 'antd';
import './Login.scss';
import { login } from '../../services/usersService';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkLogin } from '../../actions/login';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../../helpers/cookie.js';

export const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadings, setLoadings] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const email = getCookie("email");
    const password = getCookie("password");
    const remember = getCookie("remember") === "true";

    if (remember && email && password) {
      form.setFieldsValue({
        email,
        password,
        remember
      });
    }
  }, [form]);

  const onFinish = async values => {
    setLoadings(true);
    try {
      const { email, password, remember } = values;
      const res = await login(email, password);

      if (res.length > 0) {
        messageApi.open({
          type: 'success',
          content: 'Login successful',
        });

        setCookie('email', email);
        setCookie('password', password);
        setCookie('remember', remember);
        setCookie('id', res[0].id);
        setCookie('token', res[0].token);

        dispatch(checkLogin(true));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        messageApi.open({
          type: 'error',
          content: 'Login failed. Invalid email or password.',
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      messageApi.open({
        type: 'error',
        content: 'An error occurred during login. Please try again later.',
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
      <Card title="Login" style={{ maxWidth: 600 }}
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

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
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