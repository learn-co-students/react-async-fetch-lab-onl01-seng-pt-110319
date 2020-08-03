// create your App component here
import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = {
            json: {}
        }
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json)
        .then(data => console.log("data", data))
    }
    render() {
        return(
            <div>
                {console.log(this.state.json)}
            </div>
        )
    }
}
export default App