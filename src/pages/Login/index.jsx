import React from 'react'
import { Form, Icon, Input, Button, Card  } from 'antd'
import './index.less'
import { login } from '../../api/user'

class Login extends React.Component{
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const {data} = await login(values)
        localStorage.setItem('token', data.obj.token)
        this.props.history.replace('/')
      }
    })
    
    
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login">
        <header className="login-header">
          <h1>React 后台管理系统</h1>
        </header>
        <section className="login-con">
          <Card className="login-card" style={{ width: 300 }}>
            <Form  className="login-form" onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [
                    { required: true, message: '请输入用户名' },
                    { min: 4, message: '用户名至少4位' },
                    { max: 12, message: '用户名最多不超12位' },
                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能是英文数字下划线' }
                  ],
                  initialValue: 'admin'
                })( 
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    name="username"
                    placeholder="用户名"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                    name="password"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-btn" >登录</Button>
              </Form.Item>
            </Form>   
          </Card>  
        </section>
      </div> 
    )
  }
} 

const wrapLogin = Form.create()(Login)

export default wrapLogin