import React, { Component } from 'react';

import Navbar       from './component/navbar';
import Tilelayout   from './component/tilelayout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }
  
  shouldComponentUpdate(nextprops,nextstate)
  {
    return nextprops.state!==nextstate;
  }
  
  componentWillReceiveProps(nextProps)
  {
    this.setState(nextProps.state);
  }
  
  render() {
    return (
      <div className="App">
        <section className="App-header hero is-primary is-hidden-mobile">
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
