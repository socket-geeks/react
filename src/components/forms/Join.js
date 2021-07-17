import React, { Component } from 'react';

class Join extends Component {


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
      <>
        <form onSubmit={(e)=>this.props.createGame(e,this.state.name,this.state.id)} >
          <div className="segment">
            <h1>Join game</h1>
          </div>
          <label>
            <input type="text" placeholder="Your Name" name="name" onChange={this.handleChange} />
          </label>
          <label>
            <input type="text" placeholder="Game ID" name="id" onChange={this.handleChange}/>
          </label>
          <button type="submit" className="red" >
            <i className="icon ion-md-lock"></i> Join
          </button>
        </form>
      </>
    );
  }
}

export default Join;
