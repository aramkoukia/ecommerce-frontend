/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '../components/CustomButtons/Button';
import HeaderLinks from '../components/Header/HeaderLinks';
import Parallax from '../components/Parallax/Parallax';
import styles from '../assets/jss/nextjs-material-kit/pages/landingPage';
import CustomApplicationSection from '../pages-sections/LandingPage-Sections/CustomApplicationSection';

const landingBg = require('../assets/img/landing-bg.jpg');

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function HomePage(props) {
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
      <Parallax filter responsive image={landingBg}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>World of LED Lights</h1>
              <h4>
                Browse our LED Lighting Catalog or Full Catalog to find the
                right lighting product for your indoor or outdoor lighting needs.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=y4nclGvf2ic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <CustomApplicationSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
