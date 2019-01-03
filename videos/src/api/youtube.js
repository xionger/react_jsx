import axios from 'axios';


//const KEY = 'YOUR KEY HERE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
      part: 'snippet',
      maxResults: 25,
      key: KEY
    }
});