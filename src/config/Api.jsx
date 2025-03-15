import axios from  'axios';

const Api = axios.create({
    // baseURL: 'http://fakestoreapi.com/'
    baseURL: 'http://localhost:3000/'
})

export default Api