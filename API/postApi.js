import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholedr.typicode.com'

const getAllPost = async () => {
    return await axios.get('/users');
}
