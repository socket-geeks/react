import React, { Component } from 'react'
import '../style/wait.css'
class Waiting extends Component {
  render() {

    const {id}=this.props.game;
    // const {name}=this.props.player

    return (
      <div class="waitingContainer">
        <div class="box">
          <h1>game id :{id}</h1>

        </div>
      </div>
    )
  }
}

export default Waiting
