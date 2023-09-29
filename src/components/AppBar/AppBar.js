import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Header, HeaderContainer } from './AppBar.styled';
import { useLocation } from 'react-router-dom';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  return (
    <HeaderContainer
      style={{
        position: isLoginPage || isRegisterPage ? 'absolute' : 'relative',
      }}
    >
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </HeaderContainer>
  );
};
