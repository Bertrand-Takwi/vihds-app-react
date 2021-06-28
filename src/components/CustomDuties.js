import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SideNavLayout from '../layouts/SideNavLayout'

class CustomDuties extends Component {
    render() {
        return (
            <SideNavLayout>
				<div>
					<h1>CustomDuties</h1>
                    <Link to="/">Home </Link>
				</div>
			</SideNavLayout>
        )
    }
}

export default CustomDuties
