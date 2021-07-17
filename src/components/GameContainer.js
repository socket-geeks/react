import React, { Component } from 'react';
import Blocks from './Blocks';
import '../style/gameContainer.css';
// import PlayerOne from './players/PlayerOne';
// import Playertwo from './players/Playertwo';
import Buttons from './Buttons';
import Waiting from './Waiting';
import Winner from './Winner';
import io from 'socket.io-client';
let socket;

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      notification: [],
      game: {},
      player: {},
      counter: 0,
      blocks: [],
      winner: '',
    };
  }
  componentDidMount() {
    socket = io('localhost:8080/', { transports: ['websocket'] });
    const event = this.props.gameId ? 'joinGame' : 'createGame';
    socket.on('connect', () => {
      socket.emit(event, { name: this.props.name, gameId: this.props.gameId });
    });
    socket.on('upGame', (game) => {
      this.setState({
        game,
      });
      this.setState({
        blocks: game.blocks,
      });
    });
    socket.on('crPlayer', (player) => {
      this.setState({
        player,
      });
    });

    socket.on('notif', (message) => {
      this.setState({
        notification: [...this.state.notification, message],
      });
    });
  }

  trap = () => {
    const half_length = Math.ceil(this.state.blocks.length / 2);
    const leftSide = this.state.blocks.splice(0, half_length);

    if (this.state.blocks.length === 15) {
      this.setState({
        blocks: leftSide,
      });
    }
  };

  handeleAddOne = async () => {

    

    const counter = this.state.counter;
    await this.setState({
      counter: counter + 1,
      blocks: [...this.state.blocks, counter],
    });
    if (this.state.blocks.length >= 31){
      console.log(this.state.player.name)
      socket.emit('winner',{winner:this.state.player})
      socket.on('winnerIs',(game)=>{
        this.setState({
          game:game
        })
      })
    }
    // const half_length = Math.ceil(this.state.blocks.length / 2);
    // const  leftSide = this.state.blocks.splice(0,half_length);

    // if(this.state.blocks.length === 15){
    //   this.setState({
    //     blocks:leftSide
    //   })
    // }
    socket.emit('adding', {
      blocks: this.state.blocks,
      id: this.state.player.id,
      gameId: this.state.game.id,
    });
  };
  handeleAddTwo = async () => {
    if (this.state.blocks.length >= 31) {
      return;
    }
    if (this.state.blocks.length === 30) {
      return;
    }
    const counter = this.state.counter;
    await this.setState({
      counter: counter + 1,
      blocks: [...this.state.blocks, counter, counter + 1],
    });

    socket.emit('adding', {
      blocks: this.state.blocks,
      id: this.state.player.id,
      gameId: this.state.game.id,
    });
  };

  render() {
    // const turn = this.state.game.turn === this.state.player.id ? 'your move' : 'apponent move'
    const event = this.props.gameId ? 'join game' : 'create new game';
    console.log(event);
    const renderBlocks = this.state.blocks.map((block, index) => (
      <Blocks value={block} />
    ));

    return (
      <>{this.state.game.winner && <Winner player={this.state.player} winner={this.state.game.winner}/>}
        {!this.state.game.player2 && <Waiting player={this.state.player} game={this.state.game}/>}

        {this.state.game.player2 && (
          <>
            <h1>game status :{this.state.game.id}</h1>
            <h1>player :{this.state.player.name}</h1>
            <div className="boxContainer">{renderBlocks}</div>
            <Buttons
              state={this.state}
              handeleAddOne={this.handeleAddOne}
              handeleAddTwo={this.handeleAddTwo}
              trap={this.trap}
            />
          </>
        )}
      </>
    );
  }
}

export default GameContainer;
