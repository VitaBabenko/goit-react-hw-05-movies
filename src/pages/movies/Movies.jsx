import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from '../../components/loader/Loader';
import Button from '../../components/button/Button';
import MovieList from '../../components/movieList/MovieList';
import { Form, Input, Btn } from './Movies.styled';
import GetSearchMovieByKeyword from '../../services/GetSearchMovieByKeyword';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  console.log(movieId);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    setLoading(true);

    GetSearchMovieByKeyword(movieId.trim(), page)
      .then(respData => {
        console.log(respData.data);
        return (
          page === 1
            ? setMovies(respData.data.results)
            : setMovies(prevMovies => [
                ...prevMovies,
                ...respData.data.results,
              ]),
          setTotalResults(respData.data.total_results)
        );
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [movieId, page]);

  const updateQueryString = evt => {
    evt.preventDefault();
    const movieIdValue = evt.currentTarget.elements.movieId.value;
    if (movieIdValue.trim() === '') {
      setSearchParams({});
      alert('Fill out the field, please.');
      return;
    }
    setSearchParams({ movieId: movieIdValue });
    setPage(1);
    setMovies([]);
    setTotalResults(null);
    evt.currentTarget.reset();
  };

  const handleButton = () => {
    setPage(prevPage => prevPage + 1);
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
      {movies.length < totalResults && !loading && (
        <Button onClick={handleButton} />
      )}
    </>
  );
};

export default Movies;
