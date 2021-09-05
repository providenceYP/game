import React from 'react';

import Layout from 'components/Layout';
import ErrorComponent from 'components/ErrorComponent';

const NotFound = (): JSX.Element => (
  <Layout>
    <ErrorComponent code={404} text="Страница не найдена!" />
  </Layout>
);

export default NotFound;
