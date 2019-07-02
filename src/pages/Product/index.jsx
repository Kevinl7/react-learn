import React from 'react'
// import { Redirect, Link } from 'react-router-dom'
import { Card, Table, Button, Icon  } from 'antd'
import './index.less'

export default class Product extends React.Component {
  state = {
    data: []
  }

  handleAdd = () => {
    
    
  }

  componentDidMount() {
    let data = [
      {
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
      }
    ]
    this.setState({ data })
  }

  render() {
    let title = '商品分类'
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
        render: (record) => (<div><Button onClick={() => this.handleClick(record)}>详情</Button></div>)
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
      </div>
    )
  }
}