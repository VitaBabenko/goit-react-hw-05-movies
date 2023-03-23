import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 25px;
  text-align: center;
`;

export const Input = styled.input`
  width: 200px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 300px;
    height: 25px;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  height: 25px;
`;
