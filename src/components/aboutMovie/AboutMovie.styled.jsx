import styled from 'styled-components';
import { Link as LinkBack } from 'react-router-dom';
import { Link as LinkInfo } from 'react-router-dom';

export const MovieContainer = styled.div`
  @media (max-width: 767px) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 300px;
  }

  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const LinkBackTo = styled(LinkBack)`
  justify-content: flex-start;
  text-align: center;
  width: 100px;
  font-size: 12px;
  padding: 6px 14px;
  border-radius: 2px;
  border: 1px solid black;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  font-family: inherit;
  line-height: 24px;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  @media (min-width: 768px) {
    padding: 8px 16px;
    font-size: 18px;
  }

  &:hover {
    border-color: red;
  }
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 10px;
  }
`;

export const Img = styled.img`
  @media (max-width: 767px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  width: 270px;
  height: 350px;
`;

export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-left: 20px;
    text-align: left;
  }
`;

export const WrapTitle = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;

  margin-top: 10px;
  margin-bottom: 0;
`;

export const TitleOverview = styled.h3`
  font-size: 16px;
`;

export const Overview = styled.p`
  padding: 5px;
  margin-top: 0;
  margin-bottom: 0;

  @media (min-width: 768px) {
    padding-right: 12px;
    padding-left: 0;
  }
`;

export const InfoWrap = styled.div`
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LinkList = styled(LinkInfo)`
  text-decoration: none;
  color: black;

  &:hover {
    color: red;
  }
`;
