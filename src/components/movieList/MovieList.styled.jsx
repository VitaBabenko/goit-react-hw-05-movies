import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 30px;
  row-gap: 90px;
  padding-left: 5px;
  padding-right: 5px;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`;

export const ListItem = styled.li`
  width: 210px;
  height: 310px;
  > a {
    width: 210px;
    height: 310px;
    /* margin-top: 50px; */
    text-decoration: none;
    color: black;
    width: 200px;

    &:hover {
      color: red;
    }
  }
`;

export const Img = styled.img`
  /* width: 200px; */
  width: 100%;
  height: 100%;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.02);
  }
`;

export const MovieName = styled.p`
  width: 100%;
  font-size: 18px;
  text-align: center;
  margin: 0;
  padding: 10px;
`;
