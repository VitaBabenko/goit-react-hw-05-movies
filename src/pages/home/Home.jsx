import { useState, useEffect, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import GetTrending from '../../services/GetTrending';
import Loader from '../../components/loader/Loader';
import Button from '../../components/button/Button';
import ButtonUp from '../../components/buttonUp/ButtonUp';
import MovieList from '../../components/movieList/MovieList';
import { Title, ErrorMessage } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const BtnRef = useRef();
  const { y } = useWindowScroll();

  useEffect(() => {
    setLoading(true);
    GetTrending(page)
      .then(respMovies => {
        return (
          page === 1
            ? setMovies(respMovies.data.results)
            : setMovies(prevMovies => [
                ...prevMovies,
                ...respMovies.data.results,
              ]),
          setTotalResults(respMovies.data.total_results)
        );
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [page]);

  const handleButton = () => {
    setPage(prevPage => prevPage + 1);
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
      <Title ref={BtnRef}>Trending today</Title>
      {loading && <Loader />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <MovieList movies={movies} />
      {movies.length < totalResults && <Button onClick={handleButton} />}
      {y > 500 && <ButtonUp onClick={handleButtonTop} />}
    </>
  );
};

export default Home;
