import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GetMovieReviews from '../services/GetMovieReviews';
import ReviewsList from './ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setReviews([]);

    setTimeout(() => {
      GetMovieReviews(movieId)
        .then(respRev => {
          console.log(respRev.data.results);
          setReviews(respRev.data.results);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, 2000);
  }, [movieId]);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}
      {reviews.length === 0 ? (
        <p>We don`t have any reviews for this movie.</p>
      ) : (
        <ReviewsList reviews={reviews} />
      )}
    </>
  );
};

export default Reviews;
