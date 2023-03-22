import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import noPoster from '../../images/no-poster.jpg';
import {
  MovieContainer,
  LinkBackTo,
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
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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
      <LinkBackTo to={backLinkLocationRef.current}>Go back</LinkBackTo>
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
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
    </MovieContainer>
  );
};

AboutMovie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutMovie;
