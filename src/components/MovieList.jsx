import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`}>
            <p>
              {movie.title}
              {movie.name}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
