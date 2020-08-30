 import axios from 'axios'


 const KEY = 'AIzaSyDuFhEMbYxVL7N1XO5-lyJ9gapmkVMJtxw',
 
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
})