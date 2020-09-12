// create your App component here
import React, {Component} from "react";

class App extends Component {
    state={
        name: []
    }

    componentDidMount(){
      fetch("http://api.open-notify.org/astros.json")
      .then(response=>response.json())
      .then(json=>
          this.setState({
              name: json.people.name
          })
      )
    }

render (){
    return (
       <div>{this.state.name}</div> 
    )
}
}

export default App