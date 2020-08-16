import store from '../store.js'
import axios from 'axios'
export default (title, desc, severity) => axios
    .post("http://localhost:5000/api/bug", { title, desc, severity })
    .then(res => {
        console.log(severity);

        store.dispatch({
            type: "POSTBUG",
            payload: res.data
        })
    });

