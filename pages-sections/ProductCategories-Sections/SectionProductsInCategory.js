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

function SectionProductsInCategory({ products }) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgCard,
    classes.imgFluid,
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>
        {products[0].productTypeName}
        {' '}
        Products
      </h2>
      <div>
        <GridContainer>
          {products.map(({
            productName, productCode, imagePath, slugsUrl, balance,
          }) => (
            <GridItem xs={12} sm={12} md={3}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <a href={`/${slugsUrl}`}>
                    <img
                      src={imagePath || imagePlaceholder}
                      alt={productName}
                      className={imageClasses}
                    />
                  </a>
                </GridItem>
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    <a href={`products/${slugsUrl}`}>
                      { productName }
                    </a>
                  </h4>
                  { productCode }
                  <br />
                  { balance }
                  <br />
                  <a href={`products/${slugsUrl}`}>
                    See Product Details
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

export default SectionProductsInCategory;
