import axios from 'axios'

const defaultState = {
    open_bugs: [],
    closed_bugs: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GETBUGS":
            return { ...state, open_bugs: action.bugs.filter(bug => bug.status === "open"), closed_bugs: action.bugs.filter(bug => bug.status === "closed") }
        case "POSTBUG":
            return { ...state, open_bugs: [...state.open_bugs, action.payload] }
        default: return state
    }
}