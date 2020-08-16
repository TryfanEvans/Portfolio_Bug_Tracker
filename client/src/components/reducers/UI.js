const defaultState = { sort: "highest-severity" }

export default (state = defaultState, action) => {
    switch (action.type) {
        case "OPENBUGFORM":
            return state;
        default:
            return state;
    }
}