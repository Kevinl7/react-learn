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
    total: null,
    queryData: {
      type: '2',
      name: ''
    }
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
        render: (record) => {
          return (
            <span>
              <Button onClick={() => this.handleType(record)}>{record.status !== 0 ? '上架' : '下架'}</Button>
              <span>{record.status === 0 ? '上架' : '下架'}</span>
            </span>
            
          )
        }
      },
      {
        title: '操作',
        width: 100,
        render: (row) => {
          return (
            <LinkBtton onClick={() => this.props.history.push(`/sample/detail/${row.id }`)}>详情</LinkBtton>
          )
        }
      }
    ]
  }


  handleType = (row) => {
    let data = this.state.smapleData.map(item => {
      if (item.id === row.id) {
        item.status = 1
      }
      return item
    })
    this.setState({
      smapleData: data
    })
    
    
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

  searchQuery = (value) => {
    this.setState({
      queryData: {
        ...this.state.queryData,
        name: value
      }
    })
  }

  render () {

    const title = (
      <div>
        {
          /* 展开修饰符 处理给深度对象摸个属性赋值
          this.setState({ queryData: {...this.state.queryData, type: value}}) 
          */
       }
        <Select value={this.state.queryData.type} onChange={value => this.setState({ queryData: {...this.state.queryData, type: value}})}>
          <Option value='1'>按名称</Option>
          <Option value='2'>按分类</Option>
        </Select>
        <Search style={{ width: '300px' }} placeholder="input search text" onSearch={value => this.searchQuery(value)} enterButton />
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
