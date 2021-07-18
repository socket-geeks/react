import React, { Component } from 'react';
import './pl2.css'
class Playertwo extends Component {


  render() {

    const { game, player } = this.props.state;
    const canPlay = game.status === 'playing';
    const canPlay2 = player.id === game.turn;

    const display = canPlay && canPlay2 === true ? false : true;

    return (
      <>
        
        <div class="container2">  
        
          <input type="checkbox" checked={display} />
        </div>
      </>
    );
  }
}

export default Playertwo;
