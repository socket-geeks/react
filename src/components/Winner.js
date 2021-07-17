import React, { Component } from 'react'

class Winner extends Component {
  render() {

    const winner = this.props.player.id === this.props.winner ? "you win" : 'you lose'





    return (
      <div>
        <h1>{winner}</h1>        
      </div>
    )
  }
}

export default Winner
