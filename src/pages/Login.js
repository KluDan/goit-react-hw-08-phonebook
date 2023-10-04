import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoginImg from 'assets/images/LoginImg.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  overflow-y: auto;
  @media screen and (max-width: 700px) {
    display: block;
  }
`;

const LeftBlock = styled.div`
  flex: 40%;
  overflow: hidden;
  background: url(${LoginImg}) no-repeat center/cover;
  @media screen and (max-width: 1000px) {
    flex: 50%;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const LeftContent = styled.div`
  width: 100%;
  max-width: 500px;
  padding-inline: 10px;
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: #fff;
    font-size: 50px;
    font-size: clamp(1rem, 0.2rem + 4vw, 3rem);
  }
  p {
    color: #fff;
    font-size: 30px;
    text-align: center;
    font-size: clamp(1rem, 0.5rem + 2vw, 2rem);
  }
  a {
    display: block;
    font-size: 24px;
    font-weight: 600;
    padding: 12px 20px;
    margin-top: 20px;
    text-decoration: none;
    text-transform: uppercase;
    outline: none;
    border: none;
    border-radius: 15px;
    background-color: #d4ae7a;
    color: #000;
    max-width: 200px;
  }
`;
const RightBlock = styled.div`
  flex: 60%;
  padding-inline: 20px;
  background: linear-gradient(
    90deg,
    rgba(3, 9, 5, 1) 0%,
    rgba(149, 108, 77, 1) 100%
  );
  color: #fff;
  @media screen and (max-width: 1000px) {
    flex: 50%;
  }
  @media screen and (max-width: 700px) {
    min-height: 100vh;
    &::before {
      content: '';
      background: url(${LoginImg}) no-repeat bottom/cover;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.5;
    }
  }
`;
const RightContent = styled.div`
  width: 100%;
  max-width: 500px;
  padding-top: 100px;
  padding-bottom: 20px;
  margin: 0 auto;
  opacity: 1;
  @media screen and (max-width: 700px) {
    position: relative;
  }
  text-align: center;
  h2 {
    font-size: clamp(2rem, 1rem + 4vw, 4rem);
    margin-bottom: 20px;
  }
`;
const WelcomeText = styled.p`
  font-size: clamp(1.4rem, 0.2rem + 3vw, 2.3rem);
  line-height: 1.3;
  margin-bottom: clamp(2rem, 1rem + 4vw, 4rem);
`;

export default function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Container>
          <LeftBlock>
            <LeftContent>
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
              <Link to="/register">sign up</Link>
            </LeftContent>
          </LeftBlock>
          <RightBlock>
            <RightContent>
              <h2>Welcome Back!</h2>
              <WelcomeText>
                Log in to access your contacts and stay connected
              </WelcomeText>
              <LoginForm />
            </RightContent>
          </RightBlock>
        </Container>
      </div>
    </HelmetProvider>
  );
}
