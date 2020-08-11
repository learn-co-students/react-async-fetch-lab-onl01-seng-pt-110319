// create your App component here
import React, { component, Component } from 'react'
class App extends Component{
    state = {
        peopleInSpace: []
      }
    render() {
        return (
          <div>
          </div>
        )
      }
      componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(res => res.json())
          .then(data => {
            this.setState({
              peopleInSpace: data.people
            })
          })
      }
}
export default App