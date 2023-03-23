import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 110px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;

export const Wrapper = styled.div`
  flex-grow: 1;
  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  border-left: 1px solid lightgray;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

export const NameP = styled.p`
  text-align: center;
  margin: 0;
  padding: 10px;
`;
