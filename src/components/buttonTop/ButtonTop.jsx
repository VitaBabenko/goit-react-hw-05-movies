import PropTypes from 'prop-types';
import { BtnTop } from './ButtonTop.styled';
import { BsArrowUpCircle } from 'react-icons/bs';

const ButtonTop = ({ onClick }) => {
  return (
    <BtnTop type="button" onClick={onClick}>
      <BsArrowUpCircle size={30} />
    </BtnTop>
  );
};

ButtonTop.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonTop;
