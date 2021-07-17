import React, { Component } from 'react';
import '../style/btn.css'

class Buttons extends Component {
  render() {
    const { game, player } = this.props.state;

    console.log(game, player);


    const canPlay = game.status === 'playing';
    const canPlay2 = player.id === game.turn;

    const display = canPlay && canPlay2 === true ? 'auto' : 'none'



    // console.log(canPlay);




    return (
      <><div className="btnContainer">

      
        <div className="multi-button"  style={{ pointerEvents: display }} >
          <button onClick={this.props.handeleAddOne} >one</button>
          <button onClick={this.props.handeleAddTwo} >two</button>
          {/* <button>Paste</button> */}
        </div>
        </div>


      </>
    );
  }
}

export default Buttons;
