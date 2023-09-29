import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { BiUserCircle } from 'react-icons/bi';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import {
  StyledListItem,
  StyledListItemText,
  StyledListItemTextLogOut,
  UserIcon,
  Wrapper,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'menu-popper' : undefined;
  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>
      <UserIcon onClick={handleClick} style={{ userSelect: 'none' }}>
        <BiUserCircle />
      </UserIcon>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <List>
              <StyledListItem>User information</StyledListItem>
              <StyledListItem>
                <StyledListItemText>{user.email}</StyledListItemText>
              </StyledListItem>
              <StyledListItem onClick={() => dispatch(logOut())}>
                <StyledListItemTextLogOut primary="Logout" />
              </StyledListItem>
            </List>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </Wrapper>
  );
};
