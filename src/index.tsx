import { HeaderContainer, HeaderContent } from './styles';

import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to='/'></NavLink>
      </HeaderContent>
    </HeaderContainer>
  );
}


export {}
