import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    const {game,player} = this.props.state;

    console.log(game,player);


    const canPlay = game.status === 'playing';
    const canPlay2 = player.id === game.turn ;

    const display = canPlay&&canPlay2 === true ? 'auto' : 'none'
    
    

    // console.log(canPlay);



    
    return (
      <>
        <div className="button-block" style={{pointerEvents: display}} >
          <div className="social" onClick={this.props.handeleAddOne}>
            <a href={() => false}>
              {' '}
              <i className="fab fa-facebook">+1</i>
            </a>
          </div>
          <div className="social" onClick={this.props.handeleAddTwo}>
            <a href={() => false}>
              {' '}
              <i className="fab fa-twitter">+2</i>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Buttons;
