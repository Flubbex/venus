import React, { Component } from 'react';

import logo from '../logo.svg';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item" href="">
              <img src={logo} alt="Venus" className="image is-64x64"/>
            </a>
          </div>
          
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item">
                <h1 className="title">Venus</h1>
              </div>
            </div>
            
            <div className="navbar-end">
                <a className="navbar-item">
                  About
                </a>
            </div>
          </div>
          

        </nav>
    );
  }
}

export default Navbar;
