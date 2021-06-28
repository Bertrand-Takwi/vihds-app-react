import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import CustomDuties from './components/CustomDuties'
import Login from './components/Login'




class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					{/* home route */}
					<Route exact path="/"> <Home /> </Route>
					{/* custom duties route */}
					<Route path="/custom-duties"> <CustomDuties /> </Route>
					{/* Login Route */}
					<Route path="/login"> <Login /> </Route>
				</Switch>
			</Router>
		)
	}
}



export default App;
