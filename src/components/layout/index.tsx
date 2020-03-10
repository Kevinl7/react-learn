import React, {useState} from 'react';
import { Layout, Menu, Breadcrumb, Dropdown,Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingFilled,
} from '@ant-design/icons';
import './index.css';
import { withRouter } from 'react-router-dom'

import { adminRoutes } from '../../routes'
import { removeToken } from '../../utils/auth'

const { Header, Sider, Content } = Layout;

const routes = adminRoutes.filter(route => !route.hidden)

function LayoutMenu(props:any) {
  const [collapesd, setcollapesd] = useState(false)
  
  const toggle = () => {
    setcollapesd(!collapesd)
  }

  const handleClick = (item:any) => {
    props.history.push(item.key)
  }

  const selectKey = ():string[] => {
    let path = props.history.location.pathname
    return [path]
  }

  const handleClickMenu = (item:any) => {
   
    const { key } = item

    if (key === 'loginOut') {
      removeToken()
      props.history.push('/login')
    }
  }

  const menu = (
    <Menu onClick={handleClickMenu}>
      <Menu.Item key="loginOut" >
        退出登录
      </Menu.Item>
    </Menu>
  )
  
  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapesd}>
          <div className="logo">
            <h1 style={{color: 'white', lineHeight: '46px', }}>Learn-Admin</h1>
          </div>
          
          <Menu 
            theme="dark" 
            mode="inline" 
            defaultSelectedKeys={ selectKey() }
            onClick={ handleClick }
          >
            {
              routes.map(route => {
                return <Menu.Item key={route.path}>{route.title}</Menu.Item>
              })
            }
          </Menu>
        </Sider>
        <Layout>
          <Header  style={{ padding: 0, height: '50px', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center'  }}>
            {React.createElement(collapesd ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <Dropdown 
              overlay={menu} 
              placement="bottomCenter">
              <SettingFilled />
            </Dropdown>
          </Header>
          <Content
            className="app-content"
          >
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            {props.children}
          </Content>
        </Layout>
      </Layout>
  )
}

export default withRouter(LayoutMenu)
