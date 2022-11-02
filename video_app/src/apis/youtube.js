import axios from 'axios';

const KEY = 'AIzaSyCSpKfUEOxY_syyhCBQ1QZpnqtyTocUy6Y'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        maxResults: '5',
        key: KEY

    }
})
