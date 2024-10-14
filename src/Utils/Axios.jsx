import axios from 'axios'
const instatnce = axios.create({
    baseURL: 'https://fakestoreapi.com',
})
export default instatnce