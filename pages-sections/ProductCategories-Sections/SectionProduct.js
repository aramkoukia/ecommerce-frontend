/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import styles from '../../assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle';

const imagePlaceholder = require('../../assets/img/image-placeholder.jpg');

const useStyles = makeStyles(styles);

function SectionProduct({ product }) {
  const {
    productName, productTypeName, imagePath, productCode, balance,
    description, detail, additionalInformation, warrantyInformation,
  } = product;
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgCard,
    classes.imgFluid,
  );
  return (
    <div className={classes.section}>
      <h4 className={classes.title}>
        {productTypeName}
        :
        {' '}
        {productName}
      </h4>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={imagePath || imagePlaceholder}
                  alt={productName}
                  className={imageClasses}
                />
              </GridItem>
              <CardBody>
                { productCode }
                <br />
                { balance }
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={9}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Description</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  { description }
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Product Detail</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  { detail }
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Additional Information</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  { additionalInformation }
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Warranty Information</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  { warrantyInformation }
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default SectionProduct;
