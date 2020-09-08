import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tiktok228.herokuapp.com/",
})

export default instance