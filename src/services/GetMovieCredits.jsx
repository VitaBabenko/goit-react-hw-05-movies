import axios from 'axios';

const GetMovieCredits = async movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '2ec93d095b3f7dd7321ac567053c0ad5';

  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response;
};

export default GetMovieCredits;
