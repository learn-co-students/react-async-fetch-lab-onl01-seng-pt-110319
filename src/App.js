import React, { Component } from 'react'

class App extends Component {


  state = {
    spacers: []
  }
 

  render() {
    return(
      <div>
        {this.state.spacers.map(spacer => spacer.name)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
 
    .then(({data}) => 
      this.setState({spacer: data})
    )
  }
}

export default App