import React from 'react'

import { Card, Button, Form, Input, Cascader, Upload, Icon } from 'antd'

import LinkButton from '../../components/link-button'


const { Item } = Form
const { TextArea } = Input
class addUpdate extends React.Component {

  state = {
    options: []
  }

  sub = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
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
  getData = (id) => {
    let options =  [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        isLeaf: false,
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        isLeaf: false,
      }
    ]
    this.setState({
      options
    })

  }

  loadData = selectedOptions  => {
    const targetOption = selectedOptions[selectedOptions.length - 1]
    console.log(targetOption)
    targetOption.loading = true
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      this.setState({
        options: [...this.state.options],
      });
    }, 1000)
  }

  componentDidMount() {
    this.getData(0)
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 8 },
    }
    const title = (
      <span>
        <LinkButton onClick={() => this.props.history.push('/sample')}>
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
            {
              getFieldDecorator('desc')(<TextArea autosize={{ minRows: 2, maxRows: 8 }} name='desc'></TextArea>)
            }
           
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
          <Item label="商品分类:">
            {
              getFieldDecorator('case')(
              <Cascader
                options={this.state.options}
                loadData={this.loadData}
                onChange={this.onChange}
                changeOnSelect
              />)
            }
            
          </Item>
          <Item>
            <Button type='primary' onClick={this.sub}>提交</Button>
          </Item>
        </Form>
      </Card>
    )
  }
}

export default Form.create()(addUpdate)
