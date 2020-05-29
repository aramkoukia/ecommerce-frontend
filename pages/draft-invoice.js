/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'node-fetch';
import Search from '@material-ui/icons/Search';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Footer from '../components/Footer/Footer';
import CustomInput from '../components/CustomInput/CustomInput';
import Button from '../components/CustomButtons/Button';
import CategoryNavigation from '../components/Product/CategoryNavigation';
import SectionProductsInOrder from '../pages-sections/CustomApplications-Sections/SectionProductsInOrder';
import Header from '../components/Header/Header';
import HeaderLinks from '../components/Header/HeaderLinks';
import Parallax from '../components/Parallax/Parallax';
import styles from '../assets/jss/nextjs-material-kit/pages/components';

const header = require('../assets/img/nextjs_header.jpg');

const useStyles = makeStyles(styles);

export default function Products({ products, categories, ...rest }) {
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="LED Lights and Parts"
        leftLinks={<HeaderLinks />}
        rightLinks={(
          <div>
            <CustomInput
              white
              inputRootCustomClasses={classes.inputRootCustomClasses}
              formControlProps={{
                className: classes.formControl,
                width: '100%',
              }}
              inputProps={{
                placeholder: 'Search',
                inputProps: {
                  'aria-label': 'Search',
                  width: '100%',
                  className: classes.searchInput,
                },
              }}
            />
            <Button justIcon round color="white">
              <Search className={classes.searchIcon} />
            </Button>
          </div>
        )}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax small image={header} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <CategoryNavigation categories={categories} />
          </GridItem>
          <GridItem xs={12} sm={12} md={9}>
            <SectionProductsInOrder products={products} />
          </GridItem>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  // export async function getStaticProps({ params }) {
  // TODO: need to get correct list of products to display (using the draft order id?)
  const productsResponse = await fetch(`${process.env.BASE_API_URL}/api/website/producttypes/back-lighting1/products`);
  const productsResult = await productsResponse.json();
  const products = productsResult.sort((a, b) => a.rank - b.rank);
  const categoriesResponse = await fetch(`${process.env.BASE_API_URL}/api/website/producttypes`);
  const categories = await categoriesResponse.json();

  return {
    props: {
      products,
      categories,
    },
  };
}
