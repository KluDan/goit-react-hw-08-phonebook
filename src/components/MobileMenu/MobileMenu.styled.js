import { IconButton, List, SwipeableDrawer } from '@mui/material';
import styled from 'styled-components';

export const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiPaper-root {
    background-color: #58412d;
    width: 60%;
    padding-inline: 10px;
  }
`;
export const StyledList = styled(List)`
  margin-top: 40px !important;
  display: flex;
  li {
    padding: 0 !important;
  }
`;
export const StyledIconButton = styled(IconButton)`
  padding: 0 !important;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 40px;
    height: 40px;
  }
`;
