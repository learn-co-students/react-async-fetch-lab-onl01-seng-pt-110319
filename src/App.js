// create your App component here
import React from 'react'; 
import ReactDOM from 'react-dom'; 


export default class App extends React.Component {
    
    componentDidMount() {

        let baseUrl = 'http://api.open-notify.org/astros.json'

        fetch(baseUrl) 
        .then(resp => resp.json())
        .then(resp => resp)
    }

    render() {
        return(
            <div>Hello!</div>
        )
    }
}

// ReactDOM.render(<App />, document.querySelector('#root'))
