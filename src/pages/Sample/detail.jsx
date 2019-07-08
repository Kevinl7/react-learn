import React from 'react'

import { Card, Button, Icon, List } from 'antd'

import {	getDetail } from '../../api/user'

const { Item } = List

export default class Detail extends React.Component {
  state = {
    data: {
      name: '',
      desc: '',
      price: null
    }
  }


  initData = async(id) => {
    let {data} = await getDetail({ id: id })
    this.setState({
      data: data
    })
  }

  componentDidMount() {
    this.initData(this.props.match.params.id)
  }

  render() {
    const title = (
      <span>
        <Icon type='arrow-left'></Icon>
        <span>商品详情</span>
      </span>
    )
    const { name, desc, price } = this.state.data
    
    return (
      <Card title={title} className='detail'>
        <List>
          <Item>
            <span className='left'>商品名称： </span>
            <span>{name}</span>
          </Item>
          <Item>
            <span className='left'>商品描述： </span>
            <span dangerouslySetInnerHTML={{__html: desc}}></span>
          </Item>
          <Item>
            <span className='left'>商品价格： </span>
            <span>{price}</span>
          </Item>
        </List>
      </Card>
    )
  }
}


