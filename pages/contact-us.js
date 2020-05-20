/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import HeaderLinks from '../components/Header/HeaderLinks';
import Parallax from '../components/Parallax/Parallax';
import LocationInfo from '../components/LocationInfo/LocationInfo';
import CustomInput from '../components/CustomInput/CustomInput';
import logo from '../assets/img/logo.png';
import styles from '../assets/jss/nextjs-material-kit/pages/profilePage';

const profilebg = require('../assets/img/profile-bg.jpg');

const useStyles = makeStyles(styles);

export default function AboutUsPage(props) {
  const classes = useStyles();
  const MapCenter1 = [34.0522, -118.2437];
  const MapCenter2 = [34.0522, -118.2437];
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
        routes={dashboardRoutes}
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
                    <h4>Contact Us</h4>
                    <SocialLinks />
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <br />
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <b>Vancouver Store:</b>
                <LocationInfo zoom={10} center={MapCenter1} />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <b>Abbotsford Store:</b>
                <LocationInfo zoom={10} center={MapCenter2} />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <br />
                <h3>Contact Details</h3>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <p>
                  The LED Lights and Parts team has decided to ONLY provide service to our previous
                  and new contractors who have or wish to open an account with us. This will ensure
                  that our staff is able to give the best possible service.
                </p>

                <b>SHOWROOM LOCATIONS</b>
                <ul>
                  <li>
                    <b>Vancouver:</b>
                    {' '}
                    3695 E 1st Ave, Vancouver, BC V5M 1C2
                  </li>
                  <li>
                    <b>Abbotsford:</b>
                    {' '}
                    33228 S Fraser Way Abbotsford, BC V2S 2B3
                  </li>
                </ul>
                <p>
                  <b>EMAIL: </b>
                  info@lightsandparts.com
                </p>

                <p>
                  <b>Phone Number: </b>
                  <ul>
                    <li>Toll Free: 1(888) 672-2627</li>
                    <li>Tel Vancouver: (604) 559-5000</li>
                    <li>Tel Abbotsford: (604) 744-4474</li>
                    <li>Fax: (604) 559-5008</li>
                  </ul>
                </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <b>COVID_19 EFFECTED HOURS</b>
                <p>For everyone safety, We are recommending all orders by Phone or Email</p>

                <b>VANCOUVER STORE HOURS</b>
                <ul>
                  <li>Monday to Friday: 7:30am to 5:30pm</li>
                  <li>Saturday: CLOSED</li>
                  <li>Sundays & Statutory Holidays: Closed</li>
                </ul>
                <b>ABBOTSFORD STORE HOURS</b>
                <ul>
                  <li>Monday to Friday: 7:30am to 5:00pm</li>
                  <li>Saturday:10am to 2 pm</li>
                  <li>Sundays & Statutory Holidays: Closed</li>
                </ul>
                <br />

                <br />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
