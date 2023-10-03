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
  /*   @media screen and (max-width: 900px) {
    padding: 30px 15px; }*/

  p {
    position: absolute;
    top: 10px;
    left: 26px;
    display: block;
    padding: 8px;
    text-align: start;
    border-radius: 5px;
    background-color: #db2d23;
    font-size: 16px;
    line-height: 1;
    color: #fff;
    margin-bottom: 0;
  }
`;
export const StyledLink = styled(Link)`
  color: #d4ae7a;
  font-size: 18px;
  font-weight: 500;
`;
