import React, { Component } from 'react'
import Home from './components/Home';
// import io from 'socket.io-client';
// const socket = io('localhost:8080/', { transports: ['websocket'] });

class App extends Component {

  // componentDidMount() {
   
  //   socket.on('connect', () => {
  //     console.log('we are connected to socket')

  //     socket.emit("hello",{name:'ahmad',age:'15'})
  //     socket.on('www',(data)=>{
  //       console.log(data)
  //     })
  //   });
  // }


  render() {
    return (
      <div>
        <Home/>
      </div>
    )
  }
}

export default App
