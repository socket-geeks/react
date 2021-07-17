import React, { Component } from 'react';
import '../style/landing.css'

class Landing extends Component {
  render() {
    return (
      <>
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
