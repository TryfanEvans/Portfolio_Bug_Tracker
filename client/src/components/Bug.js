import React, { Component } from 'react'
import PropTypes from 'prop-types'
import closeBug from './actions/closeBug.js'
import { connect } from 'react-redux'
import editBug from './actions/editBug.js'

class Bug extends Component {
    static propTypes = {
        id: PropTypes.string, title: PropTypes.string, desc: PropTypes.string, severity: PropTypes.string, date: PropTypes.string
    }

    render() {
        const { id, title, desc, severity, date, toggle } = this.props;
        var severityColour = '';
        switch (severity) {
            case "Low": severityColour = 'yellow'; break;
            case "Moderate": severityColour = 'orange'; break;
            case "High": severityColour = 'red'; break;
            default: severityColour = 'white';
        }
        return (
            <div className='Bug' >

                <h3> {title} </h3>
                <p> {desc} </p>
                <span>  Severity: <p style={{ color: severityColour, display: 'inline' }}> {severity} </p></span>
                <p> {date} </p>

                <span className='Options'>
                    <span onClick={() => { }}><p > editor </p> <i class="fa fa-pencil" aria-hidden="true"></i></span>
                    <div />
                    <span onClick={() => closeBug(id, toggle)}> <p > {toggle}</p>  <i className="fa fa-check fa-lg" aria-hidden="true" ></i></span>

                </span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    bugs: state.bugs
})
export default connect(mapStateToProps, { closeBug })(Bug)