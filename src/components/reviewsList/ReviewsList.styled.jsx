import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  text-align: center;
  list-style: none;
  padding: 0;
  max-width: 300px;

  @media (min-width: 768px) {
    max-width: 750px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Text = styled.p`
  padding: 8px;
  margin-top: 0;

  @media (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
