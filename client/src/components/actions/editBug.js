import store from '../store'
import axios from 'axios'
export default (id, title, desc, severity) => {
    axios.patch(`http://localhost:5000/api/bug/${id}`, { title, desc, severity })
        .then(res => axios.get("http://localhost:5000/api/bug").then(res => store.dispatch(
            {
                type: "GETBUGS",

                bugs: res.data
            }
        )))
}