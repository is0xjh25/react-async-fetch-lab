// create your App component here
import React from "react";

export default class App extends React.Component {

	state = {
		peopleInSpace: []
	}
  
	render() {
	  return (
		<div>
		  {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
		</div>
	  )
	}

	componentDidMount() {
		return fetch("http://api.open-notify.org/astros.json")
		.then(res => {return res.json()})
		.then(json => {this.setState(json)})
	}
}