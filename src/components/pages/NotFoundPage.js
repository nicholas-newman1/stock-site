import React from 'react';
import { Helmet } from 'react-helmet-async';
import useScrollTop from '../../hooks/useScrollTop';

const NotFoundPage = () => {
  useScrollTop(); // scrolls to top of page on component mount

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

export default NotFoundPage;
