import React, { Component } from 'react';

import Navbar       from './component/navbar';
import Tilelayout   from './component/tilelayout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }
  render() {
    return (
      <div className="App">
        <section className="App-header hero is-primary">
          <div className="hero-footer">
            <Navbar/>
          </div>        
        </section>
        
        <Tilelayout state={this.state}/>
      </div>
    );
  }
}

export default App;
