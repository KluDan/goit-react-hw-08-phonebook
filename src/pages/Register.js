import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegisterImg from 'assets/images/RegisterImg.jpg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100vh;
  overflow: hidden;
`;
const BgContent = styled.div`
  flex: 0 1 60%;
  position: relative;
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
const BgContentBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const BgImg = styled.div`
  height: 100%;
  flex: 1 0 40%;
  img {
    width: 100%;
    object-fit: cover;
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
          <BgImg>
            <img src={RegisterImg} alt="phone" />
          </BgImg>
          <BgContent>
            <BgContentBlock>
              <h1>Create Your Phonebook Account</h1>
              <p>
                Join our Phonebook community and easily manage your contacts
              </p>
              <RegisterForm />
            </BgContentBlock>
          </BgContent>
        </Container>
      </div>
    </HelmetProvider>
  );
}
