import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import ActiveLink from '../ActiveLink';
import { StyledBsNavLink, StyledNavItem } from './Header.styles';

export const BsNavLink = (props) => {
  const { href, title } = props;
  return (
    <ActiveLink activeClassName='active' href={href}>
      <a className='nav-link port-navbar-link'>{title}</a>
    </ActiveLink>
  );
};

const BsNavBrand = () => (
  <ActiveLink activeClassName='active' href='/'>
    <a className='navbar-brand port-navbar-brand'>James Hagood</a>
  </ActiveLink>
);

const LoginLink = () => {
  return <span className='nav-link port-navbar-link clickable'>Login</span>;
};

const LogoutLink = () => {
  return <span className='nav-link port-navbar-link clickable'>Logout</span>;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className='port-navbar port-default absolute'
        color='transparent'
        dark
        expand='md'
      >
        <BsNavBrand />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem className='port-navbar-item'>
              <StyledBsNavLink href='/' title='Home' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <StyledBsNavLink href='/about' title='About' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <StyledBsNavLink href='/portfolios' title='Portfolios' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <StyledBsNavLink href='/blogs' title='Blogs' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <StyledBsNavLink href='/cv' title='Cv' />
            </NavItem>
          </Nav>
          <Nav navbar>
            <StyledNavItem className='port-navbar-item'>
              <LoginLink />
            </StyledNavItem>
            <StyledNavItem className='port-navbar-item'>
              <LogoutLink />
            </StyledNavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
