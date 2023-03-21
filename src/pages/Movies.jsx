import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from '../components/loader/Loader';
import MovieList from '../components/movieList/MovieList';
import GetSearchMovieByKeyword from '../services/GetSearchMovieByKeyword';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  console.log(movieId);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      GetSearchMovieByKeyword(movieId)
        .then(respData => {
          console.log(respData.data.results);
          setMovies(respData.data.results);
        })
        .catch(error => {
          setError(error);
        })
        .finally(() => setLoading(false));
    }, 2000);
  }, [movieId]);

  const updateQueryString = evt => {
    evt.preventDefault();
    const movieIdValue = evt.currentTarget.elements.movieId.value;
    if (movieIdValue === '') {
      setSearchParams({});
      alert('Fill out the field, please.');
      return;
    }
    setSearchParams({ movieId: movieIdValue });
    evt.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={updateQueryString}>
        <input
          type="text"
          name="movieId"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      {loading && <Loader />}
      {error && <h2>{error.message}</h2>}
      {movies && !loading && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
