import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1600px;
`;

export const List = styled.nav`
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 15px;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

export const NavLink = styled(Link)`
  font-size: 25px;
  color: black;
  text-decoration: none;

  &.active {
    color: red;
  }

  &:hover {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.12);
  }
`;
