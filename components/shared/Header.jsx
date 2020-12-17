import React, { useState } from 'react';
// import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import ActiveLink from './ActiveLink';

const BsNavLink = (props) => {
  const { href, title } = props;
  return (
    <ActiveLink activeClassName='active' href={href}>
      <a className='nav-link port-navbar-link'>{title}</a>
    </ActiveLink>
  );
};

const BsNavBrand = () => (
  <ActiveLink activeClassName='active' href='/'>
    <a className='navbar-brand port-navbar-brand'>Filip Jerga</a>
  </ActiveLink>
);

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
              <BsNavLink href='/' title='Home' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink href='/about' title='About' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink href='/portfolios' title='Portfolios' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink href='/blogs' title='Blogs' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink href='/cv' title='Cv' />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
