import styled from 'styled-components';

export const MovieContainer = styled.div`
  margin-top: 15px;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
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