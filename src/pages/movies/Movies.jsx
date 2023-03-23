import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import Loader from '../../components/loader/Loader';
import MovieList from '../../components/movieList/MovieList';
import ButtonTop from '../../components/buttonTop/ButtonTop';
import { Form, Input, Btn } from './Movies.styled';
import GetSearchMovieByKeyword from '../../services/GetSearchMovieByKeyword';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  const BtnRef = useRef();
  const { y } = useWindowScroll();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    setLoading(true);

    GetSearchMovieByKeyword(movieId.trim())
      .then(respData => {
        console.log(respData.data);
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
    if (movieIdValue.trim() === '') {
      setSearchParams({});
      alert('Fill out the field, please.');
      return;
    }
    setSearchParams({ movieId: movieIdValue });
    evt.currentTarget.reset();
  };

  const handleButtonTop = () => {
    const { top } = BtnRef.current.getBoundingClientRect();
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Form onSubmit={updateQueryString} ref={BtnRef}>
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
      <MovieList movies={movies} />
      {y > 500 && <ButtonTop onClick={handleButtonTop} />}
    </>
  );
};

export default Movies;
