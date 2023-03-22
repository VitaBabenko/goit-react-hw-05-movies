import PropTypes from 'prop-types';
import noPoster from '../../images/no-poster.jpg';
import { List, ListItem, Img, Wrapper, NameP } from './CastList.styled';

const CastList = ({ cast }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <List>
      {cast.map(el => (
        <ListItem key={el.cast_id}>
          <Img
            src={el.profile_path ? `${IMG_URL + el.profile_path}` : noPoster}
            alt={el.name}
          />
          <Wrapper>
            <NameP>{el.name}</NameP>
          </Wrapper>
        </ListItem>
      ))}
    </List>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CastList;
