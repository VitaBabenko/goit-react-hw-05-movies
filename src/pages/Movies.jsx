import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from '../components/loader/Loader';
import MovieList from '../components/movieList/MovieList';
import { Form, Input, Btn } from '../components/movieList/MovieList.styled';
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

    GetSearchMovieByKeyword(movieId)
      .then(respData => {
        setMovies(respData.data.results);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
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
      <Form onSubmit={updateQueryString}>
        <Input
          type="text"
          name="movieId"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Btn type="submit">
          <span>Search</span>
        </Btn>
      </Form>
      {loading && <Loader />}
      {error && <h2>{error.message}</h2>}
      {movies && !loading && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
