import React from 'react'
import { Switch, Route, } from 'react-router-dom'
import { Button } from 'antd'

import Detail from './detail'
import AddUpdate from './addUpdate'
import Home from './home'

import './index.less'

class Sample extends React.Component {
  render () {
    return (
      <Switch>
        {/* exact 路径完全匹配 */}
        <Route path="/sample" exact component={Home}></Route>
        <Route path="/sample/detail/:id"   component={Detail}></Route>
        <Route path="/sample/add"   component={AddUpdate}></Route>
      </Switch>
    )
  }
}

export default Sample
