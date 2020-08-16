import React, { Component } from 'react'
import { connect } from 'react-redux'
import getBugs from './actions/getBugs.js'
import AddBug from './addBug'
import Bug from './Bug'


class BugList extends Component {
    constructor(props) {
        super(props);
        getBugs('d');
    }
    render() {
        return (
            <div className='BugList'>
                <h1> Open </h1>
                {this.props.bugs.open_bugs.map(bug =>
                    <Bug id={bug._id} title={bug.title} desc={bug.desc} severity={bug.severity} date={bug.date} toggle={"close"} />
                )}
                <AddBug />
                <h1> Closed </h1>
                {this.props.bugs.closed_bugs.map(bug =>
                    <Bug id={bug._id} title={bug.title} desc={bug.desc} severity={bug.severity} date={bug.date} toggle={"open"} />
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { bugs: state.bugs }
}

export default connect(mapStateToProps, { getBugs })(BugList)