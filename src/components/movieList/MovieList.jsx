import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import noPoster from '../../images/no-poster.jpg';
import { List, ListItem, Img, MovieName } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.poster_path !== null && (
              <Img
                src={`${IMG_URL + movie.poster_path}`}
                alt={movie.title}
                width="200"
              />
            )}
            {movie.poster_path === null && (
              <img src={noPoster} alt={movie.title} />
            )}
            <MovieName>
              {movie.title}
              {movie.name}
            </MovieName>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
};

export default MovieList;
