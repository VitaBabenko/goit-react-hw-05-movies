import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GetMovieDetails from '../services/GetMovieDetails';
import AboutMovie from '../components/aboutMovie/AboutMovie';
import Loader from '../components/loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    GetMovieDetails(movieId)
      .then(respMovieId => {
        console.log(respMovieId.data);
        setMovie(respMovieId.data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <h2>{error.message}</h2>}
      {!loading && <AboutMovie movie={movie} />}
      <Outlet />
    </>
  );
};

export default MovieDetails;
