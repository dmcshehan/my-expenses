import axios from 'axios';

const instance = axios.create({
    baseURL : "https://my-expenses-cf95d.firebaseio.com/"
});

export default instance;