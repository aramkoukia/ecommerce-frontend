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

const nextjsheader = require('../../assets/img/nextjs_header.jpg');

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
      <Parallax image={nextjsheader}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>World Of LED Lights</h1>
                <h3 className={classes.subtitle}>
                  Browse our LED Lighting Catalog or Full Catalog to find
                  the right lighting product for your indoor or outdoor lighting needs.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
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


export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_API_URL}/api/website/products/slugs`);
  const items = await res.json();
  const paths = items.map((item) => ({ params: { id: item } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
// export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.BASE_API_URL}/api/website/products/${params.id}/detail`);
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}
