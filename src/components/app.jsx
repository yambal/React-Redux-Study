import React, { Component } from 'react';
import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jhon',
    };
  }

  handleMouseOver() {
    this.setState({
      name: 'Bob',
    });
  }

  handleMouseOut() {
    this.setState({
      name: 'Jhon',
    });
  }

  render() {
    return (
      <div
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
      >
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
