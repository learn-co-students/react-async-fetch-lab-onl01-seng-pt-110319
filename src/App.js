import React, {Component} from 'react';

class App extends Component {

    componentDidMount() {
        const baseURL = 'http://api.open-notify.org/astros.json'
        fetch(baseURL).then(res => res.json()).then(data => data)
    }
    render() {
        return 
    }
}

export default App;