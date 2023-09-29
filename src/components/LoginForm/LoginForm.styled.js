import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  border: 2px solid #d4ae7a;
  border-radius: 30px;
  position: relative;
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
