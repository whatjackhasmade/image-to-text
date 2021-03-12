import React from 'react';
import Link from 'next/link';

declare type DynamicLinkProps = {
  as?: string;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  to?: string;
};

const DynamicLink = (props: DynamicLinkProps) => {
  let isActive = null;

  const { as, children, className, href, target, to } = props;
  const goto = href ? href : to ? to : `#`;

  const isRelative = !goto?.startsWith(`http`);

  if (isRelative) {
    return (
      <Link as={as} href={goto}>
        <a aria-current={isActive} className={className}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a className={className} href={goto} target={target}>
      {children}
    </a>
  );
};

export default DynamicLink;
