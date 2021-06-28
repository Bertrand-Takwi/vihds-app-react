import React, { Component } from 'react'
import '../css/SideNavLayout.scss'

export default class SideNavLayout extends Component {
    render() {
        return (
            <div>
                <header className="d-flex align-items-center px-3 py-2">
                    <div className="col-2 d-flex align-items-center justify-content-around">
                        <img id="activator" alt="" src="https://s2.svgbox.net/hero-solid.svg?ic=menu-alt-2&color=679997" width="35" height="35" />
                        <h2 className="">VIHDS</h2>
                    </div>
                    <div className="col-8">
                        <input className="header-search" type="text" placeholder="holder" />
                    </div>
                     <div className="col-2 d-flex justify-content-around">
                        <img className="" src="https://s2.svgbox.net/materialui.svg?ic=settings&color=679997" width="25" height="25" alt="" />
                        <img src="https://s2.svgbox.net/materialui.svg?ic=notifications&color=679997" width="25" height="25" alt="" />
                        <img src="https://s2.svgbox.net/hero-solid.svg?ic=calendar&color=679997" width="25" height="25" alt="" />
                        <img src="https://s2.svgbox.net/materialui.svg?ic=person&color=679997" width="25" height="25" alt="" />
                    </div>
                </header>
                <nav className="pt-3 open">
                    {/* <div className="px-3">
                        <button className="btn nav-btn">Create New</button>
                    </div> */}
                </nav>
                <section id="app" className="container">
                    {this.props.children}
                </section>
        </div>
        )
    }
}





