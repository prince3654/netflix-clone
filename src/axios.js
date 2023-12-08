import axios from 'axios'    /*Library for making request from API */
const instance = axios.create(
    {
        baseURL:"https://api.themoviedb.org/3",
    }
);

export default instance;