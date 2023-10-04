import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-size: 20px;
  border: 1px solid #fff;
  font-weight: 700;
  color: #fff;
  padding: 12px;
  border-radius: 10px;
  &.active {
    padding: 12px;
    background-color: #d4ad7a;
    border-radius: 10px;
    border: none;
    color: #000;
  }
  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;
