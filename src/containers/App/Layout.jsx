import React from 'react';
import Header from 'components/segments/Header';
import Footer from 'components/segments/Footer';

const Layout = ({ children }) => (
  <div>
    <Header />
    <main className="main">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
