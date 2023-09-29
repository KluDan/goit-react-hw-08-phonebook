import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn && <StyledLink to="/phonebook">Phonebook</StyledLink>}
    </nav>
  );
};
