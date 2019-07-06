import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Button } from 'antd'

import Detail from './detail'
import AddUpdate from './addUpdate'
import Home from './home'

class Sample extends React.Component {
  render () {
    return (
      <Switch>
        {/* exact 路径完全匹配 */}
        <Route path="/sample" exact component={Home}></Route>
        <Route path="/sample/detail"  exact component={Detail}></Route>
        <Route path="/sample/add"  exact component={AddUpdate}></Route>
        <Redirect to='/sample' />
      </Switch>
    )
  }
}

export default Sample
