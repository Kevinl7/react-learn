import React from 'react'

import { Card, Button, Form, Input, Cascader, Upload, Icon } from 'antd'

import LinkButton from '../../components/link-button'


const { Item } = Form
const { TextArea } = Input
class addUpdate extends React.Component {
  sub = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        
      }
    })
  }
  validatorPrice = (rule, value, callback) => {
    if (value *1 > 0) {
      callback()
    } else {
      callback('请输入于0')
    }
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 8 },
    }
    const title = (
      <span>
        <LinkButton>
          <Icon type='arrow-left'></Icon>
          <span>  添加商品</span>
        </LinkButton>
      </span>
    )
    return (
      <Card title={title}>
        <Form {...formItemLayout}>
          <Item label="商品名称:">
            {
              getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入' }],
              })(<Input />)
            }
            
          </Item>
          <Item label="商品描述:">
           <TextArea autosize={{minRows: 2, maxRows: 8}} name='desc'></TextArea>
          </Item>
          <Item label="商品价格:">
            {
              getFieldDecorator('price', {
                rules: [
                  { required: true, message: '请输入'}, 
                  { validator: this.validatorPrice}
                ]
              })(<Input type='number' addonAfter='元'></Input>)
            }
            
          </Item>
          <Item >
            <Button type='primary' onClick={this.sub}>提交</Button>
          </Item>
        </Form>
      </Card>
    )
  }
}

export default Form.create()(addUpdate)
