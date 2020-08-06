// create your App component here
import React, {Component} from 'react';

export default class App extends Component {

    state={
        loading: true,
        person: null
    }

    async componentDidMount() {
        const url = "http://api.open-notify.org/astros.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.people, loading: false})
        console.log(data.people)
    }

    render() {
            if (this.state.loading) {
               return <div>loading...</div>
            }
            if (!this.state.person) {
                return <div>No person</div>
            }
            return (
                <div>
                    <div>{this.state.person.map(person =>  {return person.name + " - "})}</div>
                </div>
            )
    }
}