/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeaderLinks from '../components/Header/HeaderLinks';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Parallax from '../components/Parallax/Parallax';
import styles from '../assets/jss/nextjs-material-kit/pages/landingPage';
import CustomApplicationSection from '../pages-sections/LandingPage-Sections/CustomApplicationSection';

const header = require('../assets/img/nextjs_header.jpg');

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function CustomApplicationsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="LED Lights and Parts"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax small filter responsive image={header} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomApplicationSection />
          </GridItem>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
}
