/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import HeaderLinks from '../components/Header/HeaderLinks';
import Button from '../components/CustomButtons/Button';
import Parallax from '../components/Parallax/Parallax';
import CustomInput from '../components/CustomInput/CustomInput';
import logo from '../assets/img/logo.png';
import styles from '../assets/jss/nextjs-material-kit/pages/profilePage';

const profilebg = require('../assets/img/profile-bg.jpg');

const useStyles = makeStyles(styles);

export default function AboutUsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
  );
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
      <Parallax small filter image={profilebg} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={logo} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h4>LED Lights And Parts</h4>
                    <h3 className={classes.title}>About Us</h3>
                    <SocialLinks />
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                LED Lights and Parts is a Wholesaler and Distributor Company that was established in February 2009.
                We manufacture, stock, store, sell and ship a large selection of LED lights and parts products and solutions.
                We have been serving the lighting industry in Canada and the US, accompanied with two shows rooms in Vancouver and Abbotsford for more than a decade.
              </p>
              <p>
                We have built a solid reputation by providing designers, architects, contractors, and end users with quality
                LED solutions coupled with ingenuity and professional attitude in every aspect in our business.
              </p>
              <p>
                We pride ourselves on quality, product design, implementation, and unbeatable customer service.
                Our number one goal is to make our customers’ lives easier. Our customers appreciate the dedication we have for their lighting demands
                and they believe our passion is not to be hesitant. We commit ourselves to understanding and satisfying our customers’ needs, from helping them choose the right product, to making their desired custom design in any area of their choice. Our skilled and educated staff are always prepared to assist.
              </p>
              <p>
                The emerging needs of our products has improved the growth of the company,
                resulting in tremendous expansion of product availability and electric product variations
                over the past decade. We can now confidently claim, we carry the largest collection of lighting products in our field.
              </p>
              <p>
                <h5>Pixel Print Ltd.</h5>
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
