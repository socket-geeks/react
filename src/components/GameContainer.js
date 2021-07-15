import React, { Component } from 'react';
import Blocks from './Blocks';
import '../style/gameContainer.css';
import PlayerOne from './players/PlayerOne';
import Playertwo from './players/Playertwo';
import Buttons from './Buttons';

import io from 'socket.io-client';
let socket;

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      notification:[],
      game:{},
      player:{},
      counter: 0,
      blocks: [],
      winner: '',
    };
  }
  componentDidMount() {
    socket= io('localhost:8080/', { transports: ['websocket'] });
    const event = this.props.gameId ? 'joinGame' : 'createGame';
    socket.on('connect', () => {
        socket.emit(event,{name:this.props.name,gameId:this.props.gameId})
    });
    socket.on('upGame',(game)=>{
      this.setState({
        game
      })
      this.setState({
        blocks:game.blocks
      })
    })
    socket.on('crPlayer',(player)=>{
      this.setState({
        player
      })
    })

    socket.on('notif',(message)=>{
      this.setState({
        notification:[...this.state.notification,message]
      })
    })
  }



  handeleAddOne = async() => {
    if (this.state.blocks.length >= 31) {
      console.log(this.state.counter);
      return;
    }
    const counter = this.state.counter;
    await this.setState({
      counter: counter + 1,
      blocks: [...this.state.blocks, counter],
    });
    socket.emit('adding',{
      blocks:this.state.blocks,
      id:this.state.player.id,
      gameId:this.state.game.id
    })
  };
  handeleAddTwo = async() => {
    if (this.state.blocks.length >= 31) {
      return;
    }
    if (this.state.blocks.length === 30) {
      return;
    }
    const counter = this.state.counter;
    await this.setState({
      counter: counter + 1,
      blocks: [...this.state.blocks, counter,counter +1],
    });
    socket.emit('adding',{
      blocks:this.state.blocks,
      id:this.state.player.id,
      gameId:this.state.game.id
    })
  };

  render() {

    
    const turn = this.state.game.turn === this.state.player.id ? 'your move' : 'apponent move'
    const event = this.props.gameId ? "join game" : "create new game"
    console.log(event)
    const renderBlocks = this.state.blocks.map((block, index) => (
      <Blocks value={block} />
    ));
    return (
      <>
      {
        this.state.notification.map(massege => <h1>{massege.massege}</h1>)
      }

      {this.state.game.status === 'playing' && <p>{turn}</p>}

      {this.state.playerOne && <PlayerOne/>}
      {this.state.playerTwo && <Playertwo/>}
        <h1>hello {this.state.player.name}</h1>
        <h1>game status :{this.state.game.id}</h1>
        <h1>number of blocks : {this.state.blocks.length}</h1>

        <div className="container">{renderBlocks}</div>

        <Buttons state={this.state} handeleAddOne={this.handeleAddOne} handeleAddTwo={this.handeleAddTwo}/>
        
      </>
    );
  }
}

export default GameContainer;
