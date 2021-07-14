import React, { Component } from 'react'
import GameContainer from './GameContainer'
import FormCreateGame from './FormCreateGame'
import JoinGame from './JoinGame'
class Home extends Component {


  constructor(){
    super()
    this.state={
      startGame:false,
      close:true,
      name:'',
      id:''
    }
  }

  createGame = (e,name,id='')=>{
    e.preventDefault()

    this.setState({
      startGame:true,
      close:false,
      name:name,
      id:id
    })
  }



  render() {
    return (
      <>
       {this.state.close && <FormCreateGame createGame={this.createGame}/>}
        {this.state.close &&<JoinGame joinGame={this.createGame}/>}
        {this.state.startGame && <GameContainer name={this.state.name} gameId={this.state.id} />}
      </>
    )
  }
}

export default Home
