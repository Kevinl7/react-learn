import React from 'react'

import { Button, Form, Select, Input } from 'antd'

const Item = Form.Item
const Option = Select.Option

class FormAdd extends React.Component {
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form>
        <Item>
          {
            getFieldDecorator('pp')(
              <Select >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
              </Select>
            )
          }
        </Item>
      </Form>
    )
  }
} 

export default Form.create()(FormAdd)
