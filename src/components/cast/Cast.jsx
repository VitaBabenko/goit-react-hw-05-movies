import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GetMovieCredits from '../../services/GetMovieCredits';
import CastList from '../castList/CastList';
import Loader from '../loader/Loader';
import { ErrorTitle } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    GetMovieCredits(movieId)
      .then(respCast => {
        return respCast.data.cast.length === 0
          ? Promise.reject(new Error('We don`t have any cast for this movie.'))
          : setCast(respCast.data.cast);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorTitle>{error.message}</ErrorTitle>}
      <CastList cast={cast} />
    </>
  );
};

export default Cast;
