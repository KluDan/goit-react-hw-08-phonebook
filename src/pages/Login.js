import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoginImg from 'assets/images/LoginImg.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const BgImg = styled.div`
  height: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const BgContent = styled.div`
  position: relative;
  flex: 1 0 63%;
  width: 100%;
  background: rgb(3, 9, 5);
  background: linear-gradient(
    90deg,
    rgba(3, 9, 5, 1) 0%,
    rgba(149, 108, 77, 1) 100%
  );
  color: #fff;
  h1 {
    font-size: 70px;
    color: #fff;
    margin-bottom: 20px;
  }
`;
const PageText = styled.p`
  text-align: center;
  max-width: 450px;
  font-size: 36px;
  line-height: 1.3;
  margin-bottom: 60px;
`;

const BgLeft = styled.div`
  flex: 1 0 37%;
  position: relative;
`;
const BgContentBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const BgLeftText = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: #fff;
    font-size: 50px;
  }
  p {
    width: 500px;
    color: #fff;
    font-size: 30px;
    text-align: center;
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
export default function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Container>
          <BgLeft>
            <BgLeftText>
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
              <Link to="/register">sign up</Link>
            </BgLeftText>
            <BgImg>
              <img src={LoginImg} alt="Old Phone" />
            </BgImg>
          </BgLeft>
          <BgContent>
            <BgContentBlock>
              <h1>Welcome Back!</h1>
              <PageText>
                Log in to access your contacts and stay connected
              </PageText>
              <LoginForm />
            </BgContentBlock>
          </BgContent>
        </Container>
      </div>
    </HelmetProvider>
  );
}
