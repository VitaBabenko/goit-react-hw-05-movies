import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GetTrending from '../../services/GetTrending';
import Loader from '../../components/loader/Loader';
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

  const FetchMoreData = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Title>Trending today</Title>
      {loading && <Loader />}
      {error && <h2>{error.message}</h2>}
      {movies && <MovieList movies={movies} />}
      <div
        id="scrollableDiv"
        style={{
          height: 300,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        <InfiniteScroll
          dataLength={movies.length}
          next={FetchMoreData}
          style={{ display: 'flex', flexDirection: 'column-reverse' }}
          inverse={true}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {/* {movies.map((_, index) => (
            <div movie={movie} key={index}>
              div - #{index}
            </div>
          ))} */}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Home;
