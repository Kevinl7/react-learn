import React from 'react'

import { Button } from 'antd'

import Grandson from './grandson'

class Child extends React.Component {

  handleChange = e => {
    this.props.childX(e.target.value)
  }
  render () {
    return (
      <div>
        <div>儿子：</div>
        {/* <div>儿子：<span>{this.props.name}</span> </div>
        <div>{this.props.child}</div>
        <input type="text" onChange={this.handleChange} /> */}
        <Grandson></Grandson>
      </div>
    )
  }
}

export default Child
