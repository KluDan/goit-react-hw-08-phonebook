import { ActiveLink, LinkBlock } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <LinkBlock>
      <ActiveLink to="/register">Sign Up</ActiveLink>
      <ActiveLink to="/">Sign In</ActiveLink>
    </LinkBlock>
  );
};
