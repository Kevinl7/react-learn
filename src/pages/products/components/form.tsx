import React, { useState, useEffect } from 'react'
import { Form, Button, Card, Input, Row, Col, message } from 'antd'

import { addProduct, getProduct } from '../../../api/product'



function ProductForm(props: any) {

  const [procutData, setProcutData] = useState({})

  useEffect(() => {
    if (props.match.params.id) {
      getProduct(props.match.params)
        .then(res => {
          setProcutData(res.data)
        })
    }
  }, [])


  const onFinish = (values: any) => {
    addProduct(values)
      .then((res: any) => {
        message.success(res.msg)
        props.history.push('/admin/product')
      })
  }
  return (
    <>
      <Card title="商品" >
        <Form 
          onFinish={onFinish}
          initialValues={{...procutData}}>
          <Row>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
              <Form.Item label="名称" name="name"  rules={[{ required: true, message: '请输入' }]}>
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
              <Form.Item label="价格" name="price">
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
              <Form.Item>
                <Button type="primary" htmlType="submit">提交</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>

    </>
  )
}

export default ProductForm
