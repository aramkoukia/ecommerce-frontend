import React from 'react';
import Header from './Header/Header';
import HeaderLinks from './Header/HeaderLinks';
import Footer from './Footer/Footer';

const Layout = props => (
  <div>
    <Header
      color="transparent"
      brand="LED Lights And Parts"
      rightLinks={<HeaderLinks />}
      fixed
      changeColorOnScroll={{
        height: 400,
        color: 'white',
      }}
    />
    { props.children }
    <Footer />
  </div>
);

export default Layout;
