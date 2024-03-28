import { StyledNavLink, StyledNav } from "../App.styled";

export default function Navigation() {
  return (
    <div>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </StyledNav>
    </div>
  );
}
