import React from 'react'
import { Redirect, Link, Switch, Route } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import './index.less'

import Home from '../Home'
import Product from '../Product'
import Sys from '../Sys'
import Header from '../../components/header'
import menuList from '../../config/menu'

const { Sider, Content } = Layout
const { SubMenu } = Menu
export default class Admin extends React.Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  setMenuData = (menuList) => {
    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={item.path}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.setMenuData(item.children) }
          </SubMenu>
        )
      }
    })
  }

  setMenuList = (menuList) => {
    const path = this.props.location.pathname
    return menuList.reduce((pre, item) => {
      if (!item.children) {
        pre.push((
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        ))
      } else {
        let itemk = item.children.find(cItem => cItem.path === path)
        if (itemk) {
          this.openKey = item.path 
        }
        pre.push((
          <SubMenu
            key={item.path}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.setMenuList(item.children)}
          </SubMenu>
        ))
      }
      return pre
    }, [])
  }

  componentWillMount() {
    this.menuNote = this.setMenuList(menuList)
  }


  
  render() {
    let name = localStorage.getItem('token')
    const path = this.props.location.pathname
    if (name === null) {
      return <Redirect to='/login'></Redirect>
    } else {
      return (
        <Layout style={{ height: '100vh', background: '#EEF2F4' }}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <Link to='/'>
              <div className="logo">
                <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                &nbsp;&nbsp;&nbsp;后台管理
              </div>
            </Link>
            <Menu theme="dark" mode="inline" selectedKeys={[path]} defaultOpenKeys={[this.openKey]}>
              {
                this.menuNote
              }
              
            </Menu>
          </Sider>
          <Layout>
            <Header></Header>
            {/* <Header style={{ background: 'white', paddingLeft: '20px', borderBottom: '1px solid #F4F4F4' }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header> */}
            <Content
              style={{
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path='/home' component={ Home } />
                <Route path='/product' component={ Product } />
                <Route path='/sys' component={ Sys } ></Route>
                <Redirect to='/home' />
              </Switch>
          </Content>
          </Layout>
        </Layout>
      )
    }
  }
}