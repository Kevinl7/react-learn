import React from 'react'
import PropTypes  from 'prop-types'

import { Button } from 'antd'

import Child from './child'

class Test extends React.Component {
  static childContextTypes = {
    name: PropTypes.string
  }
  state = {
    name: ''
  }
  
  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }
  childX = v => {
    this.setState({
      name: v
    })
    
  }
  getChildContext() {
    return { name: this.state.name }
  }

  render () {
    return (
      <div>
        <div>爸爸说：<input type="text" onChange={this.handleChange} /></div>
        <Child name={this.state.name} child={this.state.child} childX={this.childX} />
      </div>
    )
  }
}

export default Test

