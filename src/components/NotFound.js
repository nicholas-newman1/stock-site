import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
        <meta name='description' content='Page not found' />
      </Helmet>
      <h1>404 Not Found</h1>
    </>
  );
};

export default NotFound;
