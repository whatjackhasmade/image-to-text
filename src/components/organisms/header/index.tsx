import * as React from 'react';

import { Link } from 'to-text';

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <nav className="header__items">
        <Link to="/" className="header__logo">
          Image to Text
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.defaultProps = {};

export default Header;
