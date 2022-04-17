import axios from "axios";


const instance = axios.create({
    baseURL:"http://3917-103-210-58-18.ngrok.io/api"
})

export default instance;