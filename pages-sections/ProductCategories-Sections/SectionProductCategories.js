/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import styles from '../../assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle';

const imagePlaceholder = require('../../assets/img/image-placeholder.jpg');

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
          {productCategories.map(({
            productTypeName, thumbnailImagePath, productCount, slugsUrl,
          }) => (
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <a href={`categories/${slugsUrl}`}>
                    <img
                      src={thumbnailImagePath || imagePlaceholder}
                      alt={productTypeName}
                      className={imageClasses}
                    />
                  </a>
                </GridItem>
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    <a href={`categories/${slugsUrl}`}>
                      { productTypeName }
                    </a>
                  </h4>
                  <a href={`categories/${slugsUrl}`}>
                    See
                    {' '}
                    { productCount }
                    {' '}
                    Products
                  </a>
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
