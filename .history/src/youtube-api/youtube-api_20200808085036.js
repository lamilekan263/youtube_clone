 import axios from 'axios'

axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snipper',
        maxResult : 5,
    },
    
})