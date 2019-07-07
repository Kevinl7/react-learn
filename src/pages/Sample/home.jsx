import React from 'react'
import { 
  Button, 
  Card, 
  Select, 
  Input, 
  Icon,
  Table
 } from 'antd'
 import LinkBtton from '../../components/link-button'
 import {getProduct} from '../../api/user'

const { Option } = Select
const { Search } = Input

class Home extends React.Component {

  state = {
    smapleData: [],
    total: null
  }
  initColumns = () => {
    this.columns = [
      {
        title: '商品名称',
        dataIndex: 'name'
      },
      {
        title: '商品描述',
        dataIndex: 'desc'
      },
      {
        title: '价格',
        dataIndex: 'price',
        render: (price) => '$' + price
      },
      {
        title: '状态',
        width: 100,
        dataIndex: 'status',
        render: (status) => {
          return (
            <span>
              <Button>商家</Button>
              <span>下架</span>
            </span>
            
          )
        }
      },
      {
        title: '操作',
        width: 100,
        render: (row) => {
          return (
            <LinkBtton>详情</LinkBtton>
          )
        }
      }
    ]
  }
  getData = async (pageNum) => {
    let smapleData = await getProduct({ pageNum })
    this.setState({
      smapleData: smapleData.data.list,
      total: smapleData.data.total
    })
  }

  componentWillMount() {
    // 加载columns数据
    this.initColumns()
  }

  componentDidMount() {
    // 请求数据
    this.getData()
  }

  render () {
    
    const title = (
      <div>
        <Select value='1'>
          <Option value='1'>按名称</Option>
          <Option value='2'>按分类</Option>
        </Select>
        <Search style={{ width: '300px'}} placeholder="input search text" onSearch={value => console.log(value)} enterButton />
      </div>
    )
    const extra = (
      <Button type='primary'>
        <Icon type='plus'></Icon>  
        新增
      </Button>
    )
    return (
      <Card title={title} extra={extra} >
        <Table
          columns={this.columns}
          dataSource={this.state.smapleData}
          bordered
          rowKey='id'
          pagination={{
            total: this.state.total,
            defaultPageSize: 1,
            onChange: this.getData
          }}
        />
      </Card>
    )
  }
}

export default Home
