import React, { Component } from 'react';
import '../style/landing.css'
import Name from './Name';
class Landing extends Component {
  render() {
    return (
      <>
        <Name/>
        <main>
          <div className="preloader">
            <div className="preloader__square"></div>
            <div className="preloader__square"></div>
            <div className="preloader__square"></div>
            <div className="preloader__square"></div>
          </div>
        </main>
      </>
    );
  }
}

export default Landing;
