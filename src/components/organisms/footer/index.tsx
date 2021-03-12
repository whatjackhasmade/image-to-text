import * as React from 'react';

import { Link } from 'to-text';

import StyledFooter from './footer.styles';

type FooterProps = {};

const Footer = (props: FooterProps) => {
  return (
    <StyledFooter>
      <div className="footer__contents">
        <div className="footer__footnote">
          <nav className="footer__footnote__navigation"></nav>
          <span>
            <Link href="https://whatjackhasmade.co.uk" target="_blank">
              Image to Text, &#169; {new Date().getFullYear()} WhatJackHasMade
            </Link>
          </span>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
