import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBlock = styled.div`
  margin-right: 20px;
`;
export const ActiveLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-size: 20px;
  padding: 12px;
  font-weight: 700;
  color: #fff;
  &.active {
    background-color: #d4ad7a;
    border-radius: 10px;
    color: #000;
  }
`;
