import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 30px;
  font-size: clamp(1rem, 0.3rem + 2vw, 1.5rem);
  font-weight: 600;
  width: 100%;
  padding: 12px 20px;
  outline: none;
  border: none;
  border-radius: 15px;
  background-color: #d4ae7a;
  color: #000;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    display: block;
    max-width: 300px;
    margin: 0 auto;
  }
`;
