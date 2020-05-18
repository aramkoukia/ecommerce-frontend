/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'node-fetch';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import SectionProductFilters from '../../pages-sections/ProductCategories-Sections/SectionProductFilters';
import SectionProduct from '../../pages-sections/ProductCategories-Sections/SectionProduct';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';
import styles from '../../assets/jss/nextjs-material-kit/pages/components';

const header = require('../../assets/img/nextjs_header.jpg');

const useStyles = makeStyles(styles);

export default function Product({ product, ...rest }) {
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
      <Parallax small image={header} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <SectionProductFilters />
          </GridItem>
          <GridItem xs={12} sm={12} md={9}>
            <SectionProduct product={product} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}


// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.BASE_API_URL}/api/website/products/slugs`);
//   const items = await res.json();
//   const paths = items.map((item) => ({ params: { id: item } }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps({ query }) {
  // export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.BASE_API_URL}/api/website/products/${query.id}/detail`);
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}
