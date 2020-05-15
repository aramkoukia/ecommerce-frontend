import React from 'react';
import ReactDOM from 'react-dom';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';

import PageChange from '../components/PageChange/PageChange';

import '../assets/scss/nextjs-material-kit.scss';

Router.events.on('routeChangeStart', (url) => {
  document.body.classList.add('body-page-transition');
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById('page-transition'),
  );
});
Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});
Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});

export default class MyApp extends App {
  // static async getInitialProps({ Component, router, ctx }) {
  //   let pageProps = {};

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }

  //   return { pageProps };
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>LED Lights and Parts</title>
          <meta name="description" content="LED lights and parts in Vancouver | Supplier of energy efficient LED lights. We specialize in quality, money-saving solutions including bulb, light strips for commercial &amp; industrial buildings" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="LED Light and Parts Vancouver | LED Lights and Parts" />
          <meta property="og:description" content="LED lights and parts in Vancouver | Supplier of energy efficient LED lights. We specialize in quality, money-saving solutions including bulb, light strips for commercial &amp; industrial buildings" />
          <meta property="og:url" content="https://lightsandparts.com/" />
          <meta property="og:site_name" content="LED Lights and Parts" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content="LED lights and parts in Vancouver | Supplier of energy efficient LED lights. We specialize in quality, money-saving solutions including bulb, light strips for commercial &amp; industrial buildings" />
          <meta name="twitter:title" content="LED Light and Parts Vancouver | LED Lights and Parts" />
          <meta name="twitter:site" content="@pixelprintltd" />
          <meta name="twitter:creator" content="@pixelprintltd" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
