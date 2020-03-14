import React, { useEffect, useState } from 'react'
import { Card, Table, Button } from 'antd'

import { getList } from '../../api/product'

const Product:React.FC = (props:any) => {

  const [dataSource, setDataSource] = useState([])
  // const [total, setTotal] = useState<number>(0)

  const [tableForm, setTableForm] = useState({
    page: 1,
    filter: ''
  })
  
  const columns = [
    {
      title: '序号',
      key: 'id',
      render: (txt:string, record:any, i:number) => i + 1
    },
    {
      title: '名称',
      dataIndex: 'name'
    },
    {
      title: '价格',
      dataIndex: 'price'
    },
    {
      title: '操作',
      render: (txt:string, record:any, i:number) => {
        return (
          <div>
            <Button type="primary">修改</Button>
            <Button type="danger" style={{marginLeft: '5px'}}>删除</Button>
          </div>
        )
      }
    }
  ]

  useEffect(() => {
    initData()
  }, [tableForm])


  const initData = () => {

    getList(tableForm)
      .then((res:any) => {
        setDataSource(res.data)
      })
  }

  const onChange = (page:number) => {
    setTableForm({
      ...tableForm,   
      page
    })
  }
   


  const handleRoute = () => {
    props.history.push('/admin/product/form')
  }

  return (
    <>
      <Card title="商品列表" extra={<Button onClick={handleRoute} type="primary">新增</Button>
      }>
          <Table 
            dataSource={dataSource}
            columns={columns}
            bordered
            rowKey="id"
            pagination={{total: 10, pageSize: 2, onChange }}
          >
              
          </Table>
          
      </Card>
      
    </>
  )
}

export default Product
