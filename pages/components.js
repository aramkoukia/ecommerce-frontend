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
import SectionBasics from '../pages-sections/Components-Sections/SectionBasics';
import SectionNavbars from '../pages-sections/Components-Sections/SectionNavbars';
import SectionTabs from '../pages-sections/Components-Sections/SectionTabs';
import SectionPills from '../pages-sections/Components-Sections/SectionPills';
import SectionNotifications from '../pages-sections/Components-Sections/SectionNotifications';
import SectionTypography from '../pages-sections/Components-Sections/SectionTypography';
import SectionJavascript from '../pages-sections/Components-Sections/SectionJavascript';
import SectionCarousel from '../pages-sections/Components-Sections/SectionCarousel';
import SectionCompletedExamples from '../pages-sections/Components-Sections/SectionCompletedExamples';
import SectionLogin from '../pages-sections/Components-Sections/SectionLogin';
import SectionExamples from '../pages-sections/Components-Sections/SectionExamples';
import SectionDownload from '../pages-sections/Components-Sections/SectionDownload';
import styles from '../assets/jss/nextjs-material-kit/pages/components';

const nextjsheader = require('../assets/img/nextjs_header.jpg');

const useStyles = makeStyles(styles);

export default function Components(props) {
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
        {/* <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </a>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
