import React from 'react'
import { Modal } from 'antd'
import { withRouter } from 'react-router-dom'
import LinkBtton from '../link-button'
import { formDate } from '../../utils'
import menuList from '../../config/menu'

import './index.less'

const { confirm } = Modal

class Header extends React.Component {
  state = {
    nowDate: formDate(Date.now())
  }

  getTime = () => {
    this.intervalId = setInterval(() => {
      let nowDate = formDate(Date.now())
      this.setState({ nowDate })
    }, 1000)
  }

  getTitle = () => {
    let name = this.props.location.pathname
    let title
    menuList.forEach(item => {
      if (item.path === name) {
        title = item.title
      } else if (item.children) {
        const cTitle = item.children.find(cItem => cItem.path === name)
        if (cTitle) {
          title = cTitle.title
        }
        
      }
    })
    return title
  }

  handleClick = () => {
    confirm({
      title: '确定退出登录？',
      content: '',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        localStorage.removeItem('token')
        this.props.history.replace('/login')
      }
    })
  }

  // 第一次render执行后
  componentDidMount() {
    this.getTime()
  }
  // 当前组件卸载前调用
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render () {
    const userName = localStorage.getItem('token')
    let title = this.getTitle()
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎， {userName}&nbsp;</span>
          <LinkBtton type="link" onClick={this.handleClick}>退出</LinkBtton>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">{title}</div>
          <div className="header-bottom-right">
            <span>{this.state.nowDate}</span>
            <span><img src="http://www.weather.com.cn/m/i/icon_weather/42x30/d00.gif" alt=""/></span>
            <span>晴</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
