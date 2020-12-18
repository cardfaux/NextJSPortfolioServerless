import React, { useState } from 'react';
import { Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import styled from 'styled-components';

import ActiveLink from 'components/shared/ActiveLink';
import {
  StyledBsNavLink,
  StyledNavItem,
  StyledMobileNav,
} from 'components/shared/Header/Header.styles';

export const BsNavLink = (props) => {
  const { href, title } = props;
  return (
    <ActiveLink activeClassName='active' href={href}>
      <a className='nav-link port-navbar-link'>{title}</a>
    </ActiveLink>
  );
};

const BsNavBrand = () => {
  return (
    <ActiveLink activeClassName='active' href='/'>
      <a className='navbar-brand port-navbar-brand'>James Hagood</a>
    </ActiveLink>
  );
};

const LoginLink = () => {
  return (
    <a className='nav-link port-navbar-link' href='/api/v1/login'>
      Login
    </a>
  );
};

const LogoutLink = () => {
  return <span className='nav-link port-navbar-link clickable'>Logout</span>;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <StyledBrandContainer>
        <BsNavBrand />
      </StyledBrandContainer>
      <div>
        <Navbar
          className='port-navbar port-default absolute'
          color='transparent'
          dark
          expand='md'
        >
          <NavbarToggler onClick={toggle} />
          <StyledMobileNav isOpen={isOpen} navbar>
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
          </StyledMobileNav>
        </Navbar>
      </div>
    </>
  );
};

export default Header;

const StyledBrandContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(219, 169, 25, 1);
  a {
    color: rgba(33, 37, 41, 1);
    &:hover {
      color: rgba(250, 250, 250, 1);
    }
  }
`;
