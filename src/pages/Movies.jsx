import { useSearchParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import GetSearchMovieByKeyword from '../services/GetSearchMovieByKeyword';

const Movies = () => {
  // const [searchQuery, setSearchQuery] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  console.log(movieId);

  // useEffect(() => {
  //   setTimeout(() => {
  //     GetSearchMovieByKeyword(movieId).then(respData => {
  //       console.log(respData);
  //     });
  //   }, 2000);
  // });

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    movieIdValue !== ''
      ? setSearchParams({ movieId: movieIdValue })
      : setSearchParams({});
  };

  // const handleChange = evt => {
  //   setSearchQuery(evt.target.value);
  // };

  return (
    <form>
      <input
        type="text"
        value={movieId}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={updateQueryString}
      />
      <button type="button" onClick={updateQueryString}>
        <span>Search</span>
      </button>
    </form>
  );
};

export default Movies;
