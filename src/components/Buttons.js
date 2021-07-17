import React, { Component } from 'react';
import '../style/btn.css'

class Buttons extends Component {

  

   
    
    
  render() {
    const { game, player } = this.props.state;

    console.log(game, player);


    const canPlay = game.status === 'playing';
    const canPlay2 = player.id === game.turn;

    const display = canPlay && canPlay2 === true  ? 'auto' : 'none'

    const displayBtn = canPlay && canPlay2 === true  ? true : false






    // console.log(canPlay);


const {random1,random2,random3,random4}= this.props.state

    return (
      <><div className="btnContainer">

        <div className="multi-button"  style={{ pointerEvents: display }} >
          <button  onClick={()=>this.props.buttonsHandeler(random1)} >{displayBtn&& random1}{!displayBtn&& `wait..`}</button>
          <button  onClick={()=>this.props.buttonsHandeler(random2)} >{displayBtn && random2}{!displayBtn&& `wait..`}</button>
          <button  onClick={()=>this.props.buttonsHandeler(random3)} >{displayBtn && random3}{!displayBtn&& `wait..`}</button>
          <button onClick={()=>this.props.buttonsHandeler(random4)} >{displayBtn && random4}{!displayBtn&& `wait..`}</button>
          {/* <button>Paste</button> */}
        </div>
        </div>


      </>
    );
  }
}

export default Buttons;
