import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import { FaPlay } from 'react-icons/fa';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';
import Parallax from '../../components/Parallax/Parallax';
import Layout from '../../components/Layout';

import landingPageStyle from '../../assets/jss/material-kit-react/views/landingPage';

// Sections for this page
import ProductSection from './Sections/ProductSection';
import TeamSection from './Sections/TeamSection';
import WorkSection from './Sections/WorkSection';
import CategoriesSection from './Sections/CategoriesSection';

class LandingPage extends React.Component {
  render() {
    const { classes, data } = this.props;
    return (
      <Layout>
        <Parallax filter image={require('assets/img/landing-bg.jpg')}>
          <div className={classes.container}>
            <GridContainer>
              {data && data.promotions.edges.map(document => (
                <GridItem xs={12} sm={12} md={6}>
                  <h1 className={classes.title}>{document.node.Title}</h1>
                  <h4>{document.node.Description}</h4>
                  <br />
                  <Button
                    color="danger"
                    size="lg"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPlay />
                    Watch video
                  </Button>
                </GridItem>
              ))}
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <CategoriesSection data={data} />
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
      </Layout>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
