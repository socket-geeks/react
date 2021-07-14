import React, { Component } from 'react'
import '../style/block.css'

class Blocks extends Component {
  render() {
    return (
      <div className='block' key={this.props.value} >
        {/* <p>{this.props.value}</p> */}
      </div>
    )
  }
}

export default Blocks
