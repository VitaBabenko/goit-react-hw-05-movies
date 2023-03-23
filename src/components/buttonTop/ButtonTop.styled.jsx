import styled from 'styled-components';

export const BtnTop = styled.button`
  display: block;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 2%;
  bottom: 10%;
  cursor: pointer;
  background-color: inherit;
  border: none;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.15);
    color: red;
  }
`;
