import React from 'react';
import Header from './Header/Header';
import HeaderLinks from './Header/HeaderLinks';
import Footer from './Footer/Footer';

const Layout = props => (
  <div>
    <Header
      color="primary"
      brand="LED Lights And Parts"
      rightLinks={<HeaderLinks />}
      fixed
      changeColorOnScroll={{
        height: 400,
        color: 'white',
      }}
    />
    { props }
    <Footer />
  </div>
);

export default Layout;
