import styled from 'styled-components';
import { Link as LinkBack } from 'react-router-dom';

export const MovieContainer = styled.div`
  margin-top: 20px;
`;

export const LinkBackTo = styled(LinkBack)`
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

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

export const Img = styled.img`
  width: 300px;
  height: 350px;
`;

export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapTitle = styled.div`
  display: flex;
  gap: 10px;
`;

export const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 0;
`;

export const Overview = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;
