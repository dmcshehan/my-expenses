import axios from 'axios';

const instance = axios.create({
    baseURL: "https://free.currconv.com/api/v7/convert?"
});

export default instance;