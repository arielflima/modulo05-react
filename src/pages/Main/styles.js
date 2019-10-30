import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 54px;
  color: ${props => (props.error ? 'red' : '#7159c1')};
  font-family: Ariel, Helvetica, sans-serif;

  small {
    font-size: 14px;
    color: #333;
  }
`;
