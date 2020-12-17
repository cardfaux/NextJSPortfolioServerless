import styled from 'styled-components';
import { NavItem, Collapse } from 'reactstrap';

import ActiveLink from '../ActiveLink';

const BsNavLink = (props) => {
  const { href, title } = props;
  return (
    <ActiveLink activeClassName='active' href={href}>
      <a className='nav-link port-navbar-link'>{title}</a>
    </ActiveLink>
  );
};

export const StyledBsNavLink = styled(BsNavLink)`
  cursor: pointer;
`;
export const StyledNavItem = styled(NavItem)`
  cursor: pointer;
`;

export const StyledMobileNav = styled(Collapse)`
  @media (max-width: 767px) {
    background-color: rgba(3, 151, 219, 1);
  }
`;
