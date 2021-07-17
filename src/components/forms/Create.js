import React, { Component } from 'react';

class Create extends Component {
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
        <form onSubmit={(e)=>this.props.createGame(e,this.state.name)} >  
          <div className="segment">
            <h1>Create Game</h1>
          </div>

          <label>
            <input type="text" placeholder="Your Name" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit" className="red" >
            <i className="icon ion-md-lock"></i> create
          </button>
        </form>
      </>
    );
  }
}

export default Create;
