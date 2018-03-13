import React, { Component } from 'react';

import Navbar       from './component/navbar';
import Tilelayout   from './component/tilelayout';
import Overlay      from './component/overlay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-header hero is-primary is-hidden-mobile">
          <div className="hero-footer">
            <Navbar/>
          </div>
        </section>

        <Tilelayout state={this.props.state}/>

        <Overlay state={this.props.state}/>

        <img src='tileset.png' id="tileset" alt="tileset" style={{display:"none"}}/>
      </div>
    );
  }
}

export default App;
