import axios from 'axios';

const BASE_URL = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com';

const options = {
    method: 'GET',

    headers: {
      'x-rapidapi-key': '17d0ef87femshb04ee4f18a37d3ap1475a8jsn1eb37f3a4356',
      'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
};



export const fetchFromApi = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}${url}`, options)

    return data;
}