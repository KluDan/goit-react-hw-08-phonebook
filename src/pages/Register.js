import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegisterImg from 'assets/images/RegisterImg.jpg';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  overflow-y: auto;
  @media screen and (max-width: 700px) {
    display: block;
  }
`;
const ContentBlock = styled.div`
  flex: 60%;
  padding-inline: 20px;
  background: linear-gradient(
    90deg,
    rgba(13, 16, 9, 1) 0%,
    rgba(131, 96, 71, 1) 100%
  );
  color: #fff;
  @media screen and (max-width: 1000px) {
    flex: 50%;
  }
  @media screen and (max-width: 768px) {
    min-height: 100vh;
    &::before {
      content: '';
      background: url(${RegisterImg}) no-repeat bottom/cover;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.5;
    }
  }
`;
const Content = styled.div`
  width: 100%;
  max-width: 500px;
  padding-top: 80px;
  padding-bottom: 20px;
  margin: 0 auto;
  opacity: 1;
  text-align: center;
  h2 {
    font-size: clamp(1rem, 0.2rem + 4vw, 3rem);
    margin-bottom: 20px;
  }
  p {
    font-size: clamp(1rem, 0.5rem + 2vw, 2rem);
    line-height: 1.3;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    h2 {
      font-size: 50px;
    }
    p {
      font-size: 30px;
      margin-bottom: 40px;
    }
  }
  @media screen and (max-width: 480px) {
    position: relative;
    h2 {
      font-size: 34px;
    }
    p {
      font-size: 24px;
    }
  }
`;
const ImgBlock = styled.div`
  flex: 40%;
  overflow: hidden;
  background: url(${RegisterImg}) no-repeat bottom/cover;
  @media screen and (max-width: 1000px) {
    flex: 50%;
  }
  @media screen and (max-width: 768px) {
    display: none;
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
          <ImgBlock />
          <ContentBlock>
            <Content>
              <h2>Create Your Phonebook Account</h2>
              <p>
                Join our Phonebook community and easily manage your contacts
              </p>
              <RegisterForm />
            </Content>
          </ContentBlock>
        </Container>
      </div>
    </HelmetProvider>
  );
}
