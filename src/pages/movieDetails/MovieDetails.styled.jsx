import styled from 'styled-components';
import { Link as LinkBackTo } from 'react-router-dom';

export const ErrorWrap = styled.div`
  margin-top: 20px;
`;

export const ErrorTitle = styled.h2`
  text-align: center;
  font-family: inherit;
  font-size: 20px;
  margin-top: 50px;
`;

export const LinkToBack = styled(LinkBackTo)`
  padding: 8px 16px;
  border-radius: 2px;
  border: 1px solid black;
  text-decoration: none;
  text-transform: uppercase;
  color: black;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    border-color: red;
  }
`;
