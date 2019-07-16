import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'antd'

class Grandson extends React.Component {
  static contextTypes = {
    name: PropTypes.string
  }
  render () {
    return (
      <div>孙子：{this.context.name}</div>
    )
  }
}



export default Grandson
