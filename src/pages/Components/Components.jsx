import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Parallax from 'components/Parallax/Parallax';
import HeaderLinks from 'components/Header/HeaderLinks';
import componentsStyle from 'assets/jss/material-kit-react/views/components';
import SectionBasics from './Sections/SectionBasics';
import SectionNavbars from './Sections/SectionNavbars';
import SectionTabs from './Sections/SectionTabs';
import SectionPills from './Sections/SectionPills';
import SectionNotifications from './Sections/SectionNotifications';
import SectionTypography from './Sections/SectionTypography';
import SectionJavascript from './Sections/SectionJavascript';
import SectionCarousel from './Sections/SectionCarousel';
import SectionCompletedExamples from './Sections/SectionCompletedExamples';
import SectionLogin from './Sections/SectionLogin';
import SectionExamples from './Sections/SectionExamples';
import SectionDownload from './Sections/SectionDownload';
import SectionCategories from './Sections/SectionCategories';

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="LED Lights And Parts"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: 'white',
          }}
          {...rest}
        />
        <Parallax image={require('assets/img/bg4.jpg')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>WORLD OF LED LIGHTS</h1>
                  <h3 className={classes.subtitle}>
                    Explore your lighting needs through LED Lights And Parts
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionCategories />
          <SectionBasics />
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
            <Link to="/login-page" className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
