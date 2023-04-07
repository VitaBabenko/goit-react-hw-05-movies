import axios from 'axios';

const GetTrending = async page => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '2ec93d095b3f7dd7321ac567053c0ad5';

  const response = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${page}`
  );

  return response;
};

export default GetTrending;
