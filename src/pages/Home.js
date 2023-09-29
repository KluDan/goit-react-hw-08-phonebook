import { LoginForm } from 'components/LoginForm/LoginForm';
import LoginImg from 'assets/images/LoginImg.jpg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 96vh;
  img {
    max-width: 600px;
  }
`;
const BgContent = styled.div`
  padding-top: 80px;
  padding-left: 300px;
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
  p {
    text-align: center;
    max-width: 450px;
    font-size: 36px;
    line-height: 1.3;
    margin-bottom: 60px;
  }
`;

export default function Home() {
  return (
    <Container>
      <img src={LoginImg} />
      <BgContent>
        <h1>Welcome Back!</h1>
        <p>Log in to access your contacts and stay connected</p>
        <LoginForm />
      </BgContent>
    </Container>
  );
}
