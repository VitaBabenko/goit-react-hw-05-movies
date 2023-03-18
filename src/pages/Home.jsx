import { useState, useEffect } from 'react';
import GetTrending from '../services/GetTrending';
import Loader from '../components/loader/Loader';
import MovieList from '../components/movieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    GetTrending()
      .then(respMovies => {
        setMovies(respMovies.data.results);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {error && <h2>{error.message}</h2>}
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
