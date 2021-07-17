import React, { Component } from 'react';
import '../style/wait.css';
class Waiting extends Component {
  render() {
    const { id } = this.props.game;
    // const {name}=this.props.player

    return (
      <>
        <div className="waitingMsg"></div>
        <div className="waitingMsg2">

        The game has been created. Game id: {id}. Send this to your friend to join you
        </div>

        <div class="ring ring1"></div>
        <div class="ring ring2"></div>
        <div class="ring ring3"></div>
        <div class="ring ring4"></div>
      </>
    );
  }
}

export default Waiting;
