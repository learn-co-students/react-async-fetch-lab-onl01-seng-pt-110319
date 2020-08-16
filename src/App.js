import React, { Component } from "react";

class App extends Component {


    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(reply => reply.json())
        .then(data => {
            let spacemen = data
        })

    }
    render() {
        return(
            <div className='App'>
                <h1>App</h1>
            </div>
        )
    }
}

export default App