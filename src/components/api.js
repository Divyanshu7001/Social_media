import axios from "axios";

localStorage.setItem("backend",JSON.stringify("http://127.0.0.1:8000"))
export default axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});