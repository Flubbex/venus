import React, { Component } from 'react';

import Navbar       from './component/navbar';
import Tilelayout   from './component/tilelayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-header hero is-primary">
          <div className="hero-footer">
            <Navbar/>
          </div>        
        </section>
        
        <Tilelayout/>
      </div>
    );
  }
}

export default App;
