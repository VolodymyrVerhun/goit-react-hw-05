import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  font-size: 40px;
  font-weight: 500;
  margin-right: 20px;

  text-decoration: none;
  &.active {
    color: red;
  }
`;
export const StyledNav = styled.nav`
  padding: 30px 20px 10px 50px;
  border-bottom: 3px ridge rgba(0, 0, 0, 0.4);
`;
