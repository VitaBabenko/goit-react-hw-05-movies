import { Link } from 'react-router-dom';
import { ListItem } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
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
