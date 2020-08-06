// create your App component here
import React, { Component } from 'react' 

export default class App extends Component {

    state = {
        space: []
    }
  
    render() {
      return (
        <div>
          {this.state.space.map((individual) => <h1>{individual.name}</h1>)}
        </div>
      )
    }
  
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(response => response.json())
          .then(data => {
            this.setState({
                space: data.people 
            })
        })
    }
}