import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { setToken } from '../../utils/auth'
import { login } from '../../api/auth'


interface LoginForm {
  usename: string
  password: string | number
}

const Login:React.FC = (props:any) => {

  const onFinish = (values:any) => {
    login({})
      .then(res => {
        console.log(res);
        
        // setToken('1sjshdfs')
        // props.history.push('/')
      })
    
  }

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
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

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login
