import React, { useState } from 'react';
import {
  StyledIconButton,
  StyledSwipeableDrawer,
  StyledList,
} from './MobileMenu.styled';
import { Divider, IconButton, ListItem } from '@mui/material';
import { ChevronRight, Menu } from '@mui/icons-material';
import { StyledLink } from 'components/AuthNav/AuthNav.styled';

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledIconButton onClick={() => setOpen(true)}>
        <Menu />
      </StyledIconButton>
      <StyledSwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <div>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronRight />
          </IconButton>
        </div>
        <Divider />
        <StyledList>
          <ListItem>
            <StyledLink to="/register">Sign Up</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/">Sign In</StyledLink>
          </ListItem>
        </StyledList>
      </StyledSwipeableDrawer>
    </>
  );
};
