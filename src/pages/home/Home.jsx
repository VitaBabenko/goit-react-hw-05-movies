import { useState, useEffect } from 'react';
import GetTrending from '../../services/GetTrending';
import Loader from '../../components/loader/Loader';
import Button from '../../components/button/Button';
import MovieList from '../../components/movieList/MovieList';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(null);

  useEffect(() => {
    setLoading(true);

    GetTrending(page)
      .then(respMovies => {
        console.log(respMovies.data);
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

  return (
    <>
      <Title>Trending today</Title>
      {loading && <Loader />}
      {error && <h2>{error.message}</h2>}
      {movies && <MovieList movies={movies} />}
      {movies.length < totalResults && <Button onClick={handleButton} />}
    </>
  );
};

export default Home;
