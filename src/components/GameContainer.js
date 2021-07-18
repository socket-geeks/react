import React, { Component } from 'react';
import Blocks from './Blocks';
import '../style/gameContainer.css';
import PlayerOne from './players/PlayerOne';
import Playertwo from './players/Playertwo';
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
      random1: 0,
      random2: 0,
      random3: 0,
      random4: 0,
    };
  }
  componentDidMount() {
    // socket = io('localhost:8080/', { transports: ['websocket'] });
    socket = io('https://blox-game.herokuapp.com/', {
      transports: ['websocket'],
    });

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

    //run random handler
    this.randomsHandler();
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

  //create random handler
  randomsHandler = () => {
    this.setState({
      random1: Math.ceil(Math.random() * (5 - -3) + -3),
      random2: Math.ceil(Math.random() * (5 - -3) + -3),
      random3: Math.ceil(Math.random() * (5 - -3) + -3),
      random4: Math.ceil(Math.random() * (5 - -3) + -3),
    });
  };

  // create buttonsHandeler
  buttonsHandeler = async (random) => {
    if (this.state.blocks.length + random < 0) {
      this.state.blocks.length = 0;
      return;
    }

    this.randomsHandler();
    this.state.blocks.length = this.state.blocks.length + random;
    if (this.state.blocks.length >= 31) {
      this.state.blocks.length = 31;
    }

    if (this.state.blocks.length >= 31) {
      console.log(this.state.player.name);
      socket.emit('winner', { winner: this.state.player });
      socket.on('winnerIs', (game) => {
        this.setState({
          game: game,
        });
      });
    }

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
      <>
        {this.state.game.winner && (
          <Winner player={this.state.player} winner={this.state.game.winner} />
        )}
        {!this.state.game.player2 && (
          <Waiting player={this.state.player} game={this.state.game} />
        )}

        {this.state.game.player2 && (
          <>
            <PlayerOne state={this.state} />
            <Playertwo state={this.state} />
            <div className='boxContainer'>{renderBlocks}</div>
            <Buttons
              state={this.state}
              buttonsHandeler={this.buttonsHandeler}
              timerFunction={this.timerFunction}
              trap={this.trap}
            />
          </>
        )}
      </>
    );
  }
}

export default GameContainer;
