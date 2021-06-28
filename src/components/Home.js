import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SideNavLayout from '../layouts/SideNavLayout'

class Home extends Component {
    render() {
        return (
            <SideNavLayout>
				<div>
					<h1>Home</h1>
                    <Link to="/custom-duties">Custom Duties </Link>
                    <Link to="/login">Login </Link>
				</div>
			</SideNavLayout>
        )
    }
}

export default Home
