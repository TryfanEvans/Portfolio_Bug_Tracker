import store from '../store'
import axios from 'axios'
export default (id, toggle) => {
    axios.patch(`http://localhost:5000/api/bug/${id}`, { "status": toggle })
        .then(res => axios.get("http://localhost:5000/api/bug").then(res => store.dispatch(
            {
                type: "GETBUGS",

                bugs: res.data
            }
        )))
}