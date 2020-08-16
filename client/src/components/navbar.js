import React, { Component } from 'react'
import arrow from './arrow.svg'
import arrow_double from './arrow_double.svg'
import openBugForm from './actions/openBugForm.js'
import './navbar.css'

export default class navbar extends Component {
    state = { sort: 'high_urgency' }
    render() {
        return (
            <React.Fragment>
                <nav>
                    <h1> Bug Tracker</h1>
                    <span />
                    <p onClick={() => openBugForm()}> Add + </p>
                    <div className='popDown'>
                        <p style={{ fontSize: '1.5rem' }}> Project</p>
                        <p> Project 1</p>
                        <p> Project 3</p>
                    </div>
                    <img src={arrow} />

                    <div className='popDown'>
                        <p style={{ fontSize: '1.5rem' }}> Sort By </p>
                        <p onClick={() => this.setState({ sort: 'newest' })}> Newest </p>
                        <p onClick={() => this.setState({ sort: 'oldest' })}> Oldest </p>
                        <p onClick={() => this.setState({ sort: 'high_urgency' })}> High Urgency </p>
                        <p onClick={() => this.setState({ sort: 'low_urgency' })}> Low Urgency </p>
                        <p> </p>
                    </div >
                    <img src={arrow} />
                    <input />
                    <i className="fa fa-search fa-lg" aria-hidden="true"></i>
                </nav >
                <div style={{ height: '4rem' }} />            </React.Fragment>
        )
    }
}
