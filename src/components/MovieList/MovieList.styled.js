import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieListStyled = styled.ul`
  margin-left: 60px;
  padding: 0;
  text-decoration: none;
`;

export const MovieItemStyled = styled(Link)`
  text-decoration: none;
  padding: 5px;
  font-size: 20px;
`;
