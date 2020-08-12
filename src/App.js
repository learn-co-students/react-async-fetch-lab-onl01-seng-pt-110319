// create your App component here
import React, { Component } from 'react';

class App extends Component {
  state = {
    spacePeeps: []
  }
  
   render() {
    return (
      
      <div>
        {this.state.spacePeeps.map((astronaut, id) => <h2 key={id}>{astronaut.name}</h2>)}
      </div>
      )
  }
  
  
 componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({people}) => this.setState({ spacePeeps: people }))

  }

}
 App