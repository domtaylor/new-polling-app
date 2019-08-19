import React from 'react';
import Link from 'gatsby-link';

import { Button } from '../styledComponents/theme';
import { Heading2 } from '../styledComponents/typography';

const IndexPage = () => (
  <div>
    <Heading2>A next-generation polling application</Heading2>
    <p>
      An app that lets your created your own poll. 
    </p>
    <Link to="/new">
      <Button>New Poll</Button>
    </Link>
  </div>
);

export default IndexPage;
