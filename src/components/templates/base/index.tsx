import React from 'react';

import { Footer } from 'to-text';
import { Header } from 'to-text';

type BaseProps = {
  center?: true;
  children?: any;
  context?: any;
};

const Base = (props: BaseProps) => {
  const { center, children } = props;

  const classList = center ? `main--center` : `main`;

  return (
    <React.Fragment>
      {/* <SEO {...seo} /> */}
      <Header />
      <main className={classList}>
        <section>{children}</section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

Base.defaultProps = {};

export default Base;
