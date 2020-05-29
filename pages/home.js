/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import fetch from 'node-fetch';
import { makeStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '../components/CustomButtons/Button';
import HeaderLinks from '../components/Header/HeaderLinks';
import Parallax from '../components/Parallax/Parallax';
import CustomInput from '../components/CustomInput/CustomInput';
import styles from '../assets/jss/nextjs-material-kit/pages/landingPage';
import CustomApplicationSection from '../pages-sections/LandingPage-Sections/CustomApplicationSection';

const landingBg = require('../assets/img/landing-bg.jpg');

const useStyles = makeStyles(styles);

export default function HomePage({ customApplications, ...rest }) {
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
          <CustomApplicationSection customApplications={customApplications} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_API_URL}/api/website/custom-applications`);
  const customApplications = await res.json();
  return {
    props: {
      customApplications,
    },
  };
}
