import styled from 'styled-components';
import { device } from 'particles';

import { ButtonReset } from 'to-text';

const FooterComponent = styled.footer`
  position: relative;
  z-index: 10;

  background-color: var(--black);
  color: var(--white);

  button {
    ${ButtonReset}

    &:hover {
      transform: translateY(0px);
    }
  }

  a,
  button {
    color: var(--grey200);

    &:active,
    &:focus,
    &:hover {
      color: var(--white);

      svg {
        fill: var(--white);
      }
    }

    &::after {
      display: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-bottom: 16px;

    color: var(--grey300);
    font-weight: 500;
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  svg {
    fill: var(--black);
    height: 24px;
    width: 24px;

    transition: 0.2s all ease;

    @media ${device?.md} {
      height: 28px;
      width: 28px;
    }
  }

  .footer__logo {
    display: block;
    margin: 0;
    margin-bottom: 12px;

    svg {
      display: block;
      height: 16px;
      width: auto;
    }
  }

  .footer__contents {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: var(--gridMax);
    padding: 32px 15px;
    width: 100%;

    @media ${device?.xs} {
      padding: 32px;
    }

    @media ${device?.md} {
      padding: 64px 30px;
    }
  }

  .footer__footnote {
    display: flex;
    justify-content: space-between;
    width: 100%;

    nav {
      flex-direction: row;
    }
  }

  .footer__footnote__navigation {
    a + a,
    a + button,
    button + a,
    button + button {
      margin-left: 16px;
      padding-left: 16px;
      position: relative;

      &:active,
      &:focus,
      &:hover {
        &::before {
          color: var(--grey200);
        }
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        width: 4px;
        height: 4px;
        left: -2px;

        background-color: currentColor;
        border-radius: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .footer__navigation {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .footer__navigation__list {
    flex-shrink: 0;

    a + a {
      margin-top: 8px;
    }
  }
`;

export default FooterComponent;
