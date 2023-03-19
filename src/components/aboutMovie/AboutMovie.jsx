import { Link } from 'react-router-dom';
import noPoster from '../../images/no-poster.jpg';
import {
  MovieContainer,
  Wrapper,
  Img,
  WrapInfo,
  Title,
  Overview,
  WrapTitle,
} from './AboutMovie.styled';

const AboutMovie = ({
  movie: { poster_path, title, release_date, overview },
}) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const imgUrl = poster_path ? `${IMG_URL + poster_path}` : noPoster;

  const getFullYear = release_date => {
    const dateRelease = new Date(release_date);
    return dateRelease.getFullYear();
  };

  // const findGenres = (genres, genre, newGenre) => {
  //   genres.forEach(el => {
  //     genre.forEach(({ id, name }) => {
  //       if (el === id) {
  //         newGenre.push(name);
  //       }
  //     });
  //   });

  return (
    <MovieContainer>
      <button type="button">Go back</button>
      <Wrapper>
        <Img src={imgUrl} alt={title} />
        <WrapInfo>
          <WrapTitle>
            <Title>{title}</Title>
            {release_date !== '' && (
              <Title>({getFullYear(release_date)})</Title>
            )}
          </WrapTitle>
          {overview !== '' && (
            <>
              <h3>Overview</h3>
              <Overview>{overview}</Overview>
            </>
          )}

          <h3>Genres</h3>
          <Overview></Overview>
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
