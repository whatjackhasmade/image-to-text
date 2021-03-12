import React from 'react';

import StyledLoader from './loader.styles';
import { StyledDefault } from './loader.styles';

type LoaderProps = {
  /**
   * Additional classNames to apply utility and helper classes
   */
  className?: string;
  fixed?: boolean;
  /**
   * Used to set the type of loader to use, defaults to 'circle' style
   */
  type?: `bar` | `default`;
};

const Loader: React.SFC<LoaderProps> = (props: LoaderProps) => {
  const { className, fixed, type } = props;
  const isDefault = type === `default`;

  let classList = `loader`;
  if (className) classList += ` ${className}`;

  return <StyledLoader className={classList}>{isDefault && <Default fixed={fixed} />}</StyledLoader>;
};

Loader.defaultProps = {
  fixed: true,
  type: `default`,
};

type DefaultProps = {
  fixed?: boolean;
};

const Default = ({ fixed }: DefaultProps) => (
  <StyledDefault className="loader__container" fixed={fixed}>
    <svg className="loader__vector" viewBox="25 25 50 50">
      <circle className="path" cx="50" cy="50" fill="none" r="20" strokeMiterlimit="10" />
    </svg>
    <span className="hidden">Loading...</span>
  </StyledDefault>
);

export default Loader;
