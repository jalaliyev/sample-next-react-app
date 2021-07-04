import React from 'react';
import MainHeader from './main-header/main-header';

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;