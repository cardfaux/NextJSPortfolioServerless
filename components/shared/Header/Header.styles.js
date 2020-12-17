import styled from 'styled-components';
import { NavItem } from 'reactstrap';

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
