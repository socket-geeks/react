import React, { Component } from 'react'
import '../style/winner.css'

class Winner extends Component {
  render() {

    const winner = this.props.player.id === this.props.winner ? "you win" : 'you lose'





    return (
      <div className='winner' >
          <h1>{winner}</h1> 
      </div>
    )
  }
}

export default Winner
