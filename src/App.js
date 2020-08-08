// create your App component here
import React, { Component} from 'react'

class App extends Component {

    state = {
        peopleInSpace: []
    }

    render () {
        return (
            <div>
                {this.state.peopleInSpace.map((person, id) => <h1 key={id}>Austronaut: {person.name} , Craft: {person.craft}</h1>)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(({people}) => this.setState({ peopleInSpace: people}))
    }
}
export default App