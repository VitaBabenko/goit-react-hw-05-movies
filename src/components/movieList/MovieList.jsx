import { Link, useLocation } from 'react-router-dom';
import { ListItem } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <p>
              {movie.title}
              {movie.name}
            </p>
          </Link>
        </ListItem>
      ))}
    </ul>
  );
};

export default MovieList;
