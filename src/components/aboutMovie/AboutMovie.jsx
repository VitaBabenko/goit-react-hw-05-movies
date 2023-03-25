import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import ButtonUp from '../buttonUp/ButtonUp';
import PropTypes from 'prop-types';
import noPoster from '../../images/no-poster.jpg';
import {
  MovieContainer,
  LinkBackTo,
  Wrapper,
  Img,
  WrapInfo,
  TitleMovie,
  Title,
  TitleOverview,
  Overview,
  WrapName,
  WrapTitle,
  InfoWrap,
  List,
  LinkList,
  TitleInfo,
} from './AboutMovie.styled';

const AboutMovie = ({
  movie: { poster_path, title, release_date, genres, overview, vote_average },
}) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const BtnRef = useRef();
  const { y } = useWindowScroll();

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const imgUrl = poster_path ? `${IMG_URL + poster_path}` : noPoster;

  const getFullYear = () => {
    const dateRelease = new Date(release_date);
    return dateRelease.getFullYear();
  };

  const findGenreName = genres => {
    if (!genres) {
      return;
    }
    let newArr = [];
    genres.forEach(genre => newArr.push(genre.name));
    return newArr.join(', ');
  };

  const handleButtonTop = () => {
    const { top } = BtnRef.current.getBoundingClientRect();
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <MovieContainer ref={BtnRef}>
      <LinkBackTo to={backLinkLocationRef.current}>Go back</LinkBackTo>
      <Wrapper>
        <Img src={imgUrl} alt={title} />
        <WrapInfo>
          <WrapName>
            <WrapTitle>
              <TitleMovie>{title}</TitleMovie>
              {release_date !== '' && (
                <Title>({getFullYear(release_date)})</Title>
              )}{' '}
            </WrapTitle>
            <Title>{findGenreName(genres)}</Title>
          </WrapName>
          {overview !== '' && (
            <>
              <TitleOverview>Overview:</TitleOverview>
              <Overview>{overview}</Overview>
            </>
          )}
          <TitleOverview>Vote-average: {vote_average}</TitleOverview>
        </WrapInfo>
      </Wrapper>
      <InfoWrap>
        <TitleInfo>Additional information</TitleInfo>
        <List>
          <li>
            <LinkList to="cast" state={{ from: location }}>
              Cast
            </LinkList>
          </li>
          <li>
            <LinkList to="reviews" state={{ from: location }}>
              Reviews
            </LinkList>
          </li>
        </List>
      </InfoWrap>
      {y > 500 && <ButtonUp onClick={handleButtonTop} />}
    </MovieContainer>
  );
};

AboutMovie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    overview: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};

export default AboutMovie;
