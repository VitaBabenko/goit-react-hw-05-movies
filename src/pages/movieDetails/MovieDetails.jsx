import { Suspense, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GetMovieDetails from '../../services/GetMovieDetails';
import AboutMovie from '../../components/aboutMovie/AboutMovie';
import Loader from '../../components/loader/Loader';
import { ErrorTitle } from './MovieDetails.styled';
import { ErrorWrap, LinkToBack } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    GetMovieDetails(movieId)
      .then(respMovieId => {
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
      {error && (
        <ErrorWrap>
          <LinkToBack to={backLinkLocationRef.current}>Go back</LinkToBack>
          <ErrorTitle>{error.message}</ErrorTitle>
        </ErrorWrap>
      )}
      {!loading && !error && <AboutMovie movie={movie} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
