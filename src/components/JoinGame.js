import React, { Component } from 'react';

class JoinGame extends Component {

  constructor(){
    super()
    this.state={
      name:'',
      id:''
    }
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {

    return (
      <div className="bodys" >
        <h1>join exist game</h1>
        <form onSubmit={(e)=>this.props.joinGame(e,this.state.name,this.state.id)} >
          <input onChange={this.handleChange} type="text" placeholder="Name" name="name" />
          <input onChange={this.handleChange} type="text" placeholder="game id" name="id" />
          <input type="submit" value="join" />
        </form>
      </div>
    );
  }
}

export default JoinGame;
