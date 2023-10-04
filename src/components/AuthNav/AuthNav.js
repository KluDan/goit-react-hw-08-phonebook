import { LinkBlock, StyledLink } from './AuthNav.styled';
import { Hidden } from '@mui/material';
import { useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const AuthNav = () => {
  return (
    <>
      <LinkBlock>
        <Hidden smDown>
          <StyledLink to="/register">Sign Up</StyledLink>
          <StyledLink to="/">Sign In</StyledLink>
        </Hidden>
      </LinkBlock>
      <Hidden smUp>
        <MobileMenu />
      </Hidden>
    </>
  );
};
