import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7dd9c7c63c4d45b2adb2ec1117479e80'
    }
})