import React from 'react'
import { Tabs, Table, Button, Input   } from 'antd'

const { TabPane } = Tabs
const { Search } = Input
export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      columns: [
        {
          title: '订单号',
          className: 'column-money',
          dataIndex: 'money',
        },
        {
          title: '受检者姓名',
          dataIndex: 'address', //对应字段
        },
        {
          title: 'Action',
          render: (record) => <Button onClick={() => this.handleClick(record)}>详情</Button>,
        }
      ]
    }
  }

  handleClick = (record) => {
    console.log(record)
  }

  componentDidMount = () => {
    this.data = [
      {
        money: 'O-11111',
        address: '招生数'
      },
      {
        money: 'O-11121',
        address: '招生数'
      },
      {
        money: 'O-112121',
        address: '招生数'
      },

    ]
    setTimeout(() => {
      this.setState({
        data: this.data
      })
    }, 1000)
  }

  callback = (e) => {
    console.log(e)
  }

  search = (v) => {
    this.setState({
      data: []
    })
  }
  
  render() {
    return (
      <Tabs onChange={this.callback} type="card">
        <TabPane tab="商检" key="1" >
          <Search
            placeholder="input search text"
            onSearch={value => this.search(value)}
            style={{ width: 200 }}
          />
          <Table
            columns={this.state.columns}
            dataSource={this.state.data}
            rowKey={record => record.money}
            style={{ paddingTop: '20px'}}
          />
        </TabPane>
        <TabPane tab="科研" key="2">
              科研
        </TabPane>
      </Tabs>
    )
  }
}