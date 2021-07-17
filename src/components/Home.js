import React, { Component } from 'react'
import GameContainer from './GameContainer'
import FormCreateGame from './FormCreateGame'

import Landing from './Landing'
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

    console.log(name,id)

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
      
      {this.state.close && <Landing />}
       {this.state.close && <FormCreateGame createGame={this.createGame}/>}
       {this.state.startGame && <GameContainer name={this.state.name} gameId={this.state.id} />}
      </>
    )
  }
}

export default Home
