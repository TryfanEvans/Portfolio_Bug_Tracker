import React, { Component } from 'react'
import PropTypes from 'prop-types'
import postBug from './actions/postBug.js'
import { connect } from 'react-redux'
const moment = require('moment');

class AddBug extends Component {
    state = {
        title: this.props.title,
        desc: this.props.desc,
        severity: this.props.severity,
    }
    static propTypes = {
        title: PropTypes.string, desc: PropTypes.string, severity: PropTypes.string, opt1: PropTypes.string, opt2: PropTypes.string
    }

    static defaultProps = {
        title: '', desc: '', severity: 'Low', opt1: 'cancel', opt2: 'post'
    }

    clear = () =>
        this.setState({ title: '', desc: '', severity: '' })

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("test");
    }

    onSubmit = e => {
        e.preventDefault();
        if (e.target.title === '') return;
        console.log(this.state.severity);
        postBug(this.state.title, this.state.desc, this.state.severity);
        this.clear();
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { title, desc, severity } = this.state;
        var severityColour = '';
        switch (severity) {
            case "Low": severityColour = 'yellow'; break;
            case "Moderate": severityColour = 'orange'; break;
            case "High": severityColour = 'red'; break;
            default: severityColour = 'white';
        }
        return (
            <form className='Bug' onSubmit={this.onSubmit} >
                <input id='title' name='title' value={title} onChange={this.onChange} placeholder='Title (required)' />
                <textarea id='detail' name='desc' value={desc} onChange={this.onChange} placeholder='Description (optional)' />
                <select name="severity" onChange={this.onChange}>
                    <option name="severity" value="Low">Low</option>
                    <option name="severity" value="Moderate">Moderate</option>
                    <option name="severity" value="High">High</option>
                </select>
                <p > {moment().format('MMMM Do YYYY, h:mm:ss a')} </p>
                <span className='Options'>
                    <button onClick={() => this.clear()}><p > {this.props.opt1} </p> <i class="fa fa-times" aria-hidden="true"></i></button>
                    <div />
                    <button><p type='submit'> {this.props.opt2}</p>  <i className="fa fa-check fa-lg" aria-hidden="true" ></i></button>
                </span>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    bugs: state.bugs
})
export default connect(mapStateToProps, { postBug })(AddBug)