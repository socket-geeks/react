import React, { Component } from 'react';
import '../style/form.scss';
import Join from './forms/Join';
import Create from './forms/Create';

class FormCreateGame extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      join:false,
      create:false
    };
  }


  handeleJoin = ()=>{
    this.setState({
      join:true,
      create:false
    })
  }

  handeleCreate = ()=>{
    this.setState({
      join:false,
      create:true
    })
  }

  render() {
    return (
      <>
        <div className="segment">
          <button className="unit" type="button" name='join' onClick={this.handeleJoin} >
            <i className="icon ion-md-arrow-back"> join</i>
          </button>
          <button className="unit" type="button" name='create' onClick={this.handeleCreate} >
            <i className="icon ion-md-bookmark">create</i>
          </button>
        </div>

        {this.state.join && <Join createGame = {this.props.createGame} />}
        {this.state.create && <Create createGame = {this.props.createGame} />}
      </>
    );
  }
}

export default FormCreateGame;
