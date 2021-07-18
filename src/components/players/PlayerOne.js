import React, { Component } from 'react';
import './pl1.css'


class PlayerOne extends Component {

  handelTurn = (e) =>{
    if(!e.target.value){
      e.target.checked = false
    }
  }



  render() {
    const { game, player } = this.props.state;
    const canPlay = game.status === 'playing';
    const canPlay2 = player.id === game.turn;

    const display = canPlay && canPlay2 === true ? true : false;
    return (
      <>
      
        <div class="container1">
          <input type="checkbox" checked={display} />
        </div>
      </>
    );
  }
}

export default PlayerOne;
