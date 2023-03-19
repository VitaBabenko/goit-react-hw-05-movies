import { Link } from 'react-router-dom';
import noPoster from '../../images/no-poster.jpg';
import {
  MovieContainer,
  Wrapper,
  Img,
  WrapInfo,
  Title,
  Overview,
} from './AboutMovie.styled';

const AboutMovie = ({
  movie: { poster_path, title, release_date, overview },
}) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const imgUrl = poster_path ? `${IMG_URL + poster_path}` : noPoster;

  return (
    <MovieContainer>
      <button type="button">Go back</button>
      <Wrapper>
        <Img src={imgUrl} alt={title} />
        <WrapInfo>
          <Title>
            {title} ({release_date})
          </Title>
          <h3>Overview</h3>
          <Overview>{overview}</Overview>
          <h3>Genres</h3>
          <Overview>[genres]</Overview>
        </WrapInfo>
      </Wrapper>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </MovieContainer>
  );
};

export default AboutMovie;
