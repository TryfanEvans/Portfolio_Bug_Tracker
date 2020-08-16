import store from '../store.js'
import axios from 'axios'
export default order => axios.get("http://localhost:5000/api/bug").then(res => store.dispatch(
    {
        type: "GETBUGS",
        order,
        bugs: res.data
    }
))

