import axios from 'axios';

const GetSearchMovieByKeyword = async (searchQuery, page) => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '2ec93d095b3f7dd7321ac567053c0ad5';

  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}&language=en-US&page=1&include_adult=false`
  );

  return response;
};

export default GetSearchMovieByKeyword;
