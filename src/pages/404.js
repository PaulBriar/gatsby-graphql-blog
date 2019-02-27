import React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';

export default ({ data }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Amazing Pandas Eating Things</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Layout>
      <h1>Woops, this pages does not exist!</h1>
    </Layout>
  </div>

);