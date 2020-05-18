/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import fetch from 'node-fetch';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header/Header';
import HeaderLinks from '../components/Header/HeaderLinks';
import Footer from '../components/Footer/Footer';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Parallax from '../components/Parallax/Parallax';
import SectionProductCategories from '../pages-sections/ProductCategories-Sections/SectionProductCategories';
import styles from '../assets/jss/nextjs-material-kit/pages/components';

const nextjsheader = require('../assets/img/nextjs_header.jpg');

const useStyles = makeStyles(styles);

function ProductCategories({ productCategories, ...rest }) {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="LED Lights and Parts"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax small image={nextjsheader} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <SectionProductCategories productCategories={productCategories} />
          </GridItem>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_API_URL}/api/website/producttypes`);
  const result = await res.json();
  const productCategories = result.sort((a, b) => a.rank - b.rank);
  return {
    props: {
      productCategories,
    },
  };
}

export default ProductCategories;
