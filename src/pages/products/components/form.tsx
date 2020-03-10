import React from 'react'
import { Form, Button, Card, Input, Row, Col } from 'antd'



function ProductForm() {

  const onFinish = (values: any) => {
    console.log(values);

  }
  return (
    <>
      <Card title="商品" >
        <Form onFinish={onFinish}>
          <Row>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
              <Form.Item label="名称" name="name" rules={[{ required: true, message: '请输入' }]}>
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
