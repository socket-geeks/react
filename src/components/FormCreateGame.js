import React, { Component } from 'react'
import '../style/form.css'

class FormCreateGame extends Component {

  constructor(){
    super()
    this.state={
      name:''
    }
  }

  handleChange = (e)=>{
    this.setState({
      name:e.target.value
    })
  }


  render() {
    return (
      <div className="body">
        <h1>Create new game</h1>
        <form onSubmit={(e)=>this.props.createGame(e,this.state.name)} >
          <input onChange={this.handleChange} type="text" placeholder="Name" />
          <input type="submit" value="create" />
        </form> 
      </div>
    )
  }
}

export default FormCreateGame
