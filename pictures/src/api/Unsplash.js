import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        //Authorization: 'Client-ID ACCESS_KEY_HERE'
        Authorization: 'Client-ID 619d22deb760101d03fcf02076eaf9e3f6db601fee35d781118aba9ecdb9fc11'
    }
});