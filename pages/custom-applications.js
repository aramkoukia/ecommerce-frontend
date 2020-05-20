/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeaderLinks from '../components/Header/HeaderLinks';
import Button from '../components/CustomButtons/Button';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Parallax from '../components/Parallax/Parallax';
import CustomInput from '../components/CustomInput/CustomInput';
import styles from '../assets/jss/nextjs-material-kit/pages/landingPage';
import CustomApplicationSection from '../pages-sections/LandingPage-Sections/CustomApplicationSection';

const header = require('../assets/img/nextjs_header.jpg');

const useStyles = makeStyles(styles);

export default function CustomApplicationsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
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
