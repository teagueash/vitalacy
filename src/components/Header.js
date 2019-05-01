import React from 'react';
import logo from '../assets/logo.png';

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderTextContainer,
  HeaderText,
} from '../styles/HeaderStyles';

const Header = () => (
  <HeaderContainer>
    <HeaderLogoContainer>
      <HeaderLogo src={logo} alt="Logo" />
    </HeaderLogoContainer>
    <HeaderTextContainer>
      <HeaderText>My Dashboard</HeaderText>
    </HeaderTextContainer>
  </HeaderContainer>
);

export default Header;
