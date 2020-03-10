import React from 'react'
import { Card, Table, Button } from 'antd'

const Product:React.FC = (props:any) => {
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
            <Button>修改</Button>
            <Button>删除</Button>
          </div>
        )
      }
    }
  ]


  const handleRoute = () => {
    props.history.push('/admin/product/form')
  }

  return (
    <>
      <Card title="商品列表" extra={<Button onClick={handleRoute} type="primary">新增</Button>
      }>
          <Table 
            dataSource={[]}
            columns={columns}
            bordered
          >
              
          </Table>
          
      </Card>
      
    </>
  )
}

export default Product
