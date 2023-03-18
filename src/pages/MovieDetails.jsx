import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import GetMovieDetails from '../services/GetMovieDetails';

const MovieDetails = () => {
  const { movieId } = useParams();

  useEffect(() => {
    GetMovieDetails(movieId).then(respMovieId => {
      return console.log(respMovieId);
    });
  }, [movieId]);
  return <div>MovieDetails</div>;
};

export default MovieDetails;
