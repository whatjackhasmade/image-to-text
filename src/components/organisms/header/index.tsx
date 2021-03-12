import * as React from 'react';

import { Link } from 'to-text';

import HeaderComponent from './header.styles';

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const [menuOpen, toggleMenu] = React.useState<boolean>(false);

  let className = `header`;
  if (menuOpen) className += ` header--show`;

  const handleClick = e => {
    e.preventDefault();
    toggleMenu(!menuOpen);
  };

  const menuLabel: 'Close' | 'Open' = menuOpen ? `Close` : `Open`;

  return (
    <HeaderComponent className={className}>
      <div className="header__contents">
        <Link to="/" className="header__logo">
          Image to Text
        </Link>
        <button onClick={handleClick}>
          <span>{menuLabel} Menu</span>
        </button>
        <nav className="header__items">
          <Link href="/">Home</Link>
        </nav>
      </div>
    </HeaderComponent>
  );
};

Header.defaultProps = {};

export default Header;
