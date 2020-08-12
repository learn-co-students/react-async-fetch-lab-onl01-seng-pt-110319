// create your App component here
import React from 'react';

export default class App extends React.Component {

	constructor() {
		super()
		this.state = {
			spacePeople: []
		}
	}

	render() {
		return (
		<div>
			{this.state.spacePeople.map(person => person.name)}
		</div>
		)
	}

	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json') 
		.then(response => response.json())
		.then(json => {
			this.setState({
				spacePeople: json.people
			})
		})
	}

}