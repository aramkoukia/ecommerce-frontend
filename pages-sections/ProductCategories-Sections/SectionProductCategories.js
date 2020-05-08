import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import styles from '../../assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle';

const useStyles = makeStyles(styles);

function SectionProductCategories({productCategories}) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgCard,
    classes.imgFluid,
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Product Categories</h2>
      <div>
        <GridContainer>
          {productCategories.map(({ name, description, image }) => (
          <GridItem xs={12} sm={12} md={3}>
          <Card plain>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <img src={image} alt="..." className={imageClasses} />
            </GridItem>
            <h4 className={classes.cardTitle}>
                { name }
              <br />
              <small className={classes.smallTitle}>Model</small>
            </h4>
            <CardBody>
              <p className={classes.description}>
                { description }
                {' '}
                <a href="#pablo">links</a>
                {' '}
                for people to be able to
                follow them outside the site.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyCenter}>
              <Button
                justIcon
                color="transparent"
                className={classes.margin5}
              >
                <i className={`${classes.socials} fab fa-twitter`} />
              </Button>
              <Button
                justIcon
                color="transparent"
                className={classes.margin5}
              >
                <i className={`${classes.socials} fab fa-instagram`} />
              </Button>
              <Button
                justIcon
                color="transparent"
                className={classes.margin5}
              >
                <i className={`${classes.socials} fab fa-facebook`} />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
          ))}

        </GridContainer>
            
      </div>
    </div>
  );
}

export default SectionProductCategories;
