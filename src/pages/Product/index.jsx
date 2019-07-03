import React from 'react'
// import { Redirect, Link } from 'react-router-dom'
import { Card, Table, Button, Icon, Modal  } from 'antd'
import FormAdd from './form-add'
import './index.less'

export default class Product extends React.Component {
  state = {
    data: [],
    parentId: 0,
    visible: false,
    loading: false
  }
  // 新增
  handleAdd = () => {
    this.setState({
      visible: true
    })
  }
  // 弹出框 提交
  handleOk = () => {

  }
  // 弹出框关闭
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }


  handleClick = (record) => {
    this.setState({
      parentId: record.id
    }, () => {
      this.getData(true)
    })
  }

  getData = (x) => {
    let data = !x ? [
      {
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        id: 1
      }
    ] : [
        {
          key: '11',
          name: '儿子',
          money: '￥300,000.00',
          id: 11
        }
      ]
    this.setState({ data })
  }

  handleRead = (record) => {
    console.log(record)
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    
    let title = this.state.parentId === 0 ? '商品分类'
      : (
        <div>
          <span>商品分类</span> > 
          <span>erzi </span>
        </div>
      )
    let extra = (
      <Button type='primary' onClick={this.handleAdd}><Icon type='plus'></Icon> 添加</Button>
    )
    const columns = [
      {
        title: '商品名',
        dataIndex: 'name',
      },
      {
        title: '操作',
        render: (record) => (
          <div>
            <Button onClick={() => this.handleClick(record) }>详情</Button>
            <Button onClick={this.handleRead}>查看二级</Button>
          </div>
        )
      },
    ];

    return (
      <div>
        <Card title={title} extra={extra} style={{ width: '100%' }}>
          <Table
            columns={columns}
            dataSource={this.state.data}
            bordered
            rowKey='money'
          />
        </Card>
        {/* 新增 */}
        <Modal
          title="新增"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
              提交
            </Button>,
          ]}
        >
          <FormAdd></FormAdd>
        </Modal>
      </div>
    )
  }
}