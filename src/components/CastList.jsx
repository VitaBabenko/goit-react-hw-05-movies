import noPoster from '../images/no-poster.jpg';

const CastList = ({ cast }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul>
      {cast.map(el => (
        <li key={el.cast_id}>
          <img
            src={el.profile_path ? `${IMG_URL + el.profile_path}` : noPoster}
            alt={el.name}
            width="200"
          />
          <p>{el.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastList;
