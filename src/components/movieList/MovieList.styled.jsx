import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 30px;
  padding-left: 5px;
  padding-right: 5px;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`;

export const ListItem = styled.li`
  > a {
    text-decoration: none;
    color: black;
    width: 200px;

    &:hover {
      color: red;
    }
  }
`;

export const Img = styled.img`
  width: 200px;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.02);
  }
`;

export const MovieName = styled.p`
  width: 200px;
  font-size: 18px;
  text-align: center;
  margin: 0;
  padding: 10px;
`;

export const Form = styled.form`
  margin-top: 15px;
`;

export const Input = styled.input`
  width: 300px;
  height: 25px;
`;

export const Btn = styled.button`
  cursor: pointer;
  height: 25px;
`;
