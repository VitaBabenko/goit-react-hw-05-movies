import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GetMovieReviews from '../../services/GetMovieReviews';
import ReviewsList from '../ReviewsList';
import Loader from '../loader/Loader';
import { ErrorTitle } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setReviews([]);

    GetMovieReviews(movieId)
      .then(respRev => {
        return respRev.data.results.length === 0
          ? Promise.reject(
              new Error('We don`t have any reviews for this movie.')
            )
          : setReviews(respRev.data.results);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorTitle>{error.message}</ErrorTitle>}
      <ReviewsList reviews={reviews} />
    </>
  );
};

export default Reviews;
