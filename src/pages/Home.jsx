import { useState, useEffect } from 'react';
import GetTrending from '../services/GetTrending';
import MovieList from '../components/MovieList';

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
      {loading && <h2>Loading</h2>}
      {error && <h2>Error</h2>}
      {movies.length !== 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
