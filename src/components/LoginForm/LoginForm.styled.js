import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: clamp(1rem, 0.3rem + 2vw, 2rem);
  padding-block: clamp(1rem, 0.3rem + 4vw, 3rem);
  border: 2px solid #d4ae7a;
  border-radius: 30px;
  position: relative;
`;
export const StyledLink = styled(Link)`
  color: #d4ae7a;
  font-size: 18px;
  font-weight: 500;
`;

export const ErrorText = styled.p`
  font-size: 15px;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  background-color: #db2d23;
  margin-block: -20px;
  @media screen and (max-width: 1006px) {
    font-size: 14px;
    margin-block: -10px;
  }
`;
