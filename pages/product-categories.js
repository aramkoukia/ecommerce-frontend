import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header/Header';
import HeaderLinks from '../components/Header/HeaderLinks';
import Footer from '../components/Footer/Footer';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '../components/CustomButtons/Button';
import Parallax from '../components/Parallax/Parallax';
import SectionProductFilters from '../pages-sections/ProductCategories-Sections/SectionProductFilters';
import SectionProductCategories from '../pages-sections/ProductCategories-Sections/SectionProductCategories';
import styles from '../assets/jss/nextjs-material-kit/pages/components';

const nextjsheader = require('../assets/img/nextjs_header.jpg');

const useStyles = makeStyles(styles);

export default function ProductCategories(props) {
  const classes = useStyles();
  const { ...rest } = props;
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
                  Browse our LED Lighting Catalogue or Full Catalogue to find the right lighting product for your indoor or outdoor lighting needs.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionProductFilters />
        <SectionProductCategories />
      </div>
      <Footer />
    </div>
  );
}
