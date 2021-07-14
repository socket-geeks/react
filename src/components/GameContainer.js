import React, { Component } from 'react';
import Blocks from './Blocks';
import '../style/gameContainer.css';
import PlayerOne from './players/PlayerOne';
import Playertwo from './players/Playertwo';

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      blocks: [],
      playerOne: true,
      playerTwo: false,
      winner: '',
    };
  }

  handeleAddOne = () => {
    if (this.state.blocks.length >= 31) {
      console.log(this.state.counter);
      return;
    }
    const counter = this.state.counter;
    this.setState({
      counter: counter + 1,
      blocks: [...this.state.blocks, counter],
    });
    if (this.state.playerOne) {
      this.setState({
        playerOne: false,
        playerTwo: true,
      });
      return;
    }
    if (this.state.playerTwo) {
      this.setState({
        playerOne: true,
        playerTwo: false,
      });
      return;
    }
  };
  handeleAddTwo = () => {
    if (this.state.blocks.length >= 31) {
      return;
    }
    if (this.state.blocks.length === 30) {
      return;
    }
    const counter = this.state.counter;
    this.setState({
      counter: counter + 1,
      blocks: [...this.state.blocks, counter, counter + 1],
    });

    if (this.state.playerOne) {
      this.setState({
        playerOne: false,
        playerTwo: true,
      });
      return;
    }
    if (this.state.playerTwo) {
      this.setState({
        playerOne: true,
        playerTwo: false,
      });
      return;
    }
  };

  render() {
    const event = this.props.gameId ? "join game" : "create new game"
    console.log(event)
    const renderBlocks = this.state.blocks.map((block, index) => (
      <Blocks value={block} />
    ));
    return (
      <>

      {this.state.playerOne && <PlayerOne/>}
      {this.state.playerTwo && <Playertwo/>}
        
        <h1>number of blocks : {this.state.blocks.length}</h1>
        <div className="container">{renderBlocks}</div>

        <div className="button-block">
          <div className="social" onClick={this.handeleAddOne}>
            <a href={() => false}>
              {' '}
              <i className="fab fa-facebook">+1</i>
            </a>
          </div>
          <div className="social" onClick={this.handeleAddTwo}>
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

export default GameContainer;
