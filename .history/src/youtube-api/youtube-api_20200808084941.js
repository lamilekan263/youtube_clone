 import axios from 'axios'

axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snipper'
        
    },
    key : 'AIzaSyDuFhEMbYxVL7N1XO5-lyJ9gapmkVMJtxw'
})