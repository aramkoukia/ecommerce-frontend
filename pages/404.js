/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Apps } from '@material-ui/icons';
import Search from '@material-ui/icons/Search';
import HeaderLinks from '../components/Header/HeaderLinks';
import Parallax from '../components/Parallax/Parallax';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import CustomInput from '../components/CustomInput/CustomInput';
import Button from '../components/CustomButtons/Button';
import styles from '../assets/jss/nextjs-material-kit/pages/profilePage';

const background = require('../assets/img/profile-bg.jpg');

const useStyles = makeStyles(styles);

export default function _404(props) {
  const classes = useStyles();
  // componentDidMount() {
  //   Router.push('/product-categories');
  // }
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
      <Parallax small filter image={background} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div className={classes.name}>
                    <h4 style={{ color: 'white' }}>Sorry, Looks like we cannot find the page you are looking for!</h4>
                    <br />
                    <br />
                    <Button
                      href="/product-categories"
                      color="transparent"
                      className={classes.navLink}
                    >
                      <Apps className={classes.icons} />
                      {' '}
                      Go to Homepage
                    </Button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <SocialLinks />
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
