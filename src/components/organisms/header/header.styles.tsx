import styled from 'styled-components';
import { device } from 'particles';

const HeaderComponent = styled.header`
  width: 100%;

  background-color: var(--black);
  color: var(--white);

  button {
    span {
      @media ${device?.MXsm} {
        font-weight: 700;
      }
    }

    box-shadow: none;
  }

  a,
  button {
    padding: 8px;
    position: relative;

    color: var(--white);
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    transition: 0.2s all ease;

    &[aria-current='page'] {
      box-shadow: none;
      color: var(--primary);
      text-decoration: none;

      &::after {
        transform: scaleX(1);
      }
    }

    + a {
      margin-left: 0;

      @media ${device?.md} {
        margin-left: 16px;
      }
    }
  }

  button {
    align-items: center;
    display: flex;
    justify-content: center;

    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    outline: none;
    transform: translateX(8px);

    &:active,
    &:focus,
    &:hover {
      transform: translateX(8px);
    }

    span + span {
      display: none;
      margin-left: 4px;

      @media ${device?.xs} {
        display: inline-block;
      }
    }

    svg {
      margin-left: 8px;
      height: 20px;
    }

    @media ${device?.md} {
      display: none;
    }
  }

  nav + a {
    display: none;

    color: var(--black);
    font-weight: 900;

    @media ${device?.md} {
      display: block;
    }
  }

  .header__contents {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: var(--gridMax);
    padding: 32px 15px;
    width: 100%;

    @media ${device?.xs} {
      padding: 32px 30px;
    }
  }

  .header__logo {
    display: block;
    padding-left: 0;

    &::after {
      display: none;
    }
  }

  nav,
  .header__items {
    display: flex;

    @media ${device?.md} {
      flex-direction: row;
      position: relative;
    }

    @media ${device?.MXmd} {
      flex-direction: column;
      justify-content: center;
    }
  }

  nav {
    @media ${device?.MXmd} {
      height: 100%;
      left: 100%;
      padding: 32px;
      position: fixed;
      top: 0;
      width: 100%;

      background: var(--white);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      transition: 0.4s left ease;
    }
  }

  .header__items {
    @media ${device?.md} {
      margin-left: 0;

      @media ${device?.md} {
        margin-left: auto;
      }
    }
  }

  .header__menu--show {
    @media ${device?.MXmd} {
      left: 0;
    }
  }

  nav:last-of-type {
    a {
      padding: 16px;

      background-color: var(--primary);
      color: var(--white);
      font-weight: bold;

      &::after {
        display: none;
      }
    }
  }
`;

export default HeaderComponent;
