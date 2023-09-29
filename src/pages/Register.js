import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegisterImg from 'assets/images/RegisterImg.jpg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  img {
    flex: 1 0 40%;
  }
`;
const BgContent = styled.div`
  padding-top: 30px;
  padding-left: 200px;
  width: 100%;
  background: rgb(13, 16, 9);
  background: linear-gradient(
    90deg,
    rgba(13, 16, 9, 1) 0%,
    rgba(131, 96, 71, 1) 100%
  );
  color: #fff;
  h1 {
    max-width: 500px;
    font-size: 50px;
    margin-bottom: 20px;
  }
  p {
    font-size: 30px;
    max-width: 540px;
    line-height: 1.3;
    margin-bottom: 60px;
  }
`;

export default function Register() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <Container>
          <img src={RegisterImg} />
          <BgContent>
            <h1>Create Your Phonebook Account</h1>
            <p>Join our Phonebook community and easily manage your contacts</p>
            <RegisterForm />
          </BgContent>
        </Container>
      </div>
    </HelmetProvider>
  );
}
