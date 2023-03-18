import { Link } from 'react-router-dom';
import noPoster from '../images/no-poster.jpg';

const AboutMovie = ({
  movie: { poster_path, title, release_date, overview },
}) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const imgUrl = poster_path ? `${IMG_URL + poster_path}` : noPoster;

  return (
    <>
      <button type="button">Go back</button>
      <img src={imgUrl} alt={title} />
      <h2>
        {title} ({release_date})
      </h2>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>[genres]</p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default AboutMovie;
