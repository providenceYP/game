import React from 'react';

import Button from '@/components/Button';
import Logo from '@/components/Logo';

import './Navbar.css';

export const Navbar: React.FC = () => (
  <div className="navbar">
    <div className="navbar__left">
      <Logo />
    </div>
    <div className="navbar__center">
      <Button>Test</Button>
    </div>
    <div className="navbar__right">
      <Button>Test</Button>
    </div>
  </div>
);
