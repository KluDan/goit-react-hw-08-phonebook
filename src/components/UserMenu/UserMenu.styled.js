import { List, ListItem, ListItemText, Popper } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const WelcomeText = styled.div`
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
export const UserIcon = styled.div`
  cursor: pointer;
  svg {
    width: 36px;
    height: 36px;
  }
`;
export const PopperStyled = styled(Popper)`
  z-index: 180;
`;
export const StyledList = styled(List)`
  font-size: 24px;
`;
export const StyledListItem = styled(ListItem)`
  color: #757575;
  font-size: 20px;
`;

export const StyledListItemText = styled(ListItemText)`
  margin-bottom: 20px;
  color: #000;
  font-style: italic;
  margin-top: -10px;
`;
export const StyledListItemTextLogOut = styled(ListItemText)`
  color: #000;
  cursor: pointer;
  text-align: center;
  background-color: #d4ae7a;
  border-radius: 5px;
`;
