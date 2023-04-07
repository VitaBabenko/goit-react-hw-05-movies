import PropTypes from 'prop-types';
import { BsArrowUpCircle } from 'react-icons/bs';
import { BtnUp } from './ButtonUp.styled';

const ButtonTop = ({ onClick }) => {
  return (
    <BtnUp type="button" onClick={onClick}>
      <BsArrowUpCircle size={30} />
    </BtnUp>
  );
};

ButtonTop.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonTop;
