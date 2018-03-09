import React, { Component } from 'react';

import Navbar       from './component/navbar';
import Tilelayout   from './component/tilelayout';

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
      </div>
    );
  }
}

export default App;
