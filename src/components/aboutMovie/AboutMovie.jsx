import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import ButtonTop from '../buttonTop/ButtonTop';
import PropTypes from 'prop-types';
import noPoster from '../../images/no-poster.jpg';
import {
  MovieContainer,
  LinkBackTo,
  Wrapper,
  Img,
  WrapInfo,
  Title,
  TitleOverview,
  Overview,
  WrapTitle,
  InfoWrap,
  List,
  LinkList,
  TitleInfo,
} from './AboutMovie.styled';

const AboutMovie = ({
  movie: { poster_path, title, release_date, overview, genres },
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

  const handleButtonTop = () => {
    const { top } = BtnRef.current.getBoundingClientRect();
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  // const findGenreName = () => {
  //   const genresArr = [];

  //   // genres.forEach(({ name }) => {
  //   //   findGenres.push(name);
  //   // });

  //   for (const genre of genres) {
  //     genresArr.push(genre.name);
  //   }
  //   // return genresArr;
  //   console.log(genresArr);
  // };

  return (
    <MovieContainer ref={BtnRef}>
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
              <TitleOverview>Overview</TitleOverview>
              <Overview>{overview}</Overview>
            </>
          )}
          {/* {genres.length > 0 && (
            <> */}
          <TitleOverview>Genres</TitleOverview>
          <Overview></Overview>
          {/* </>
          )} */}
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
      {y > 500 && <ButtonTop onClick={handleButtonTop} />}
    </MovieContainer>
  );
};

AboutMovie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
  }),
};

export default AboutMovie;
