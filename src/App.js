import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            peopleInSpace: []
        };
    }
    componentDidMount() {
        const baseURL = 'http://api.open-notify.org/astros.json'
        fetch(baseURL).then(res => res.json()).then(data => this.setState({ peopleInSpace: data.people }))
    }
    render() {
        return (
            <div>
                {this.state.peopleInSpace.map((person) => <h1>{person.name}</h1>)}
            </div>
        )
    }
}

export default App;