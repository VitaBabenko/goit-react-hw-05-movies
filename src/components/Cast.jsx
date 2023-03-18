import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GetMovieCredits from '../services/GetMovieCredits';
import CastList from './CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      GetMovieCredits(movieId)
        .then(respCast => {
          console.log(respCast.data.cast);
          setCast(respCast.data.cast);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, 2000);
  }, [movieId]);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}
      {cast && <CastList cast={cast} />}
    </>
  );
};

export default Cast;
