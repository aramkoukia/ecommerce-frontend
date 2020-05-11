/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import styles from '../../assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle';

const useStyles = makeStyles(styles);

function SectionProductCategories({ productCategories }) {
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
          {productCategories.map(({ productTypeName, description, thumbnailImagePath }) => (
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={thumbnailImagePath} alt={productTypeName} className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  { productTypeName }
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    { description }
                    {' '}
                    <a href="#pablo">Details</a>
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          ))}

        </GridContainer>

      </div>
    </div>
  );
}

export default SectionProductCategories;
