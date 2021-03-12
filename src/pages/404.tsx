import * as React from 'react';

import { Link } from 'to-text';

import { Base } from 'to-text';

type Four0FourProps = {};

const Four0Four = (props: Four0FourProps) => {
  return (
    <Base context={props}>
      <h1>Sorry, we couldn't find that</h1>
      <Link to="/">Return to the homepage</Link>
    </Base>
  );
};

export default Four0Four;
