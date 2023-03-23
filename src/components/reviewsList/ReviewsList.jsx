import PropTypes from 'prop-types';
import { List, Text } from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <Text>{review.content}</Text>
        </li>
      ))}
    </List>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default ReviewsList;
