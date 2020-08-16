const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const bugSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        //moment doesn't cast to date format 
        default: moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    desc: {
        type: String,
        required: false
    },
    severity: {
        type: String,
        default: 'Low'
    },
    status: {
        type: String,
        default: 'open'
    }
})

module.exports = bug = mongoose.model('bug', bugSchema);