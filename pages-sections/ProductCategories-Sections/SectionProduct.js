/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import ProductImages from './ProductImages';
import styles from '../../assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle';

const useStyles = makeStyles(styles);

function SectionProduct({ product }) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const {
    productName, productTypeName, imagePath, productCode, balance,
    description, detail, additionalInformation, warrantyInformation,
    imagePaths,
  } = product;

  const photos = imagePaths && imagePaths.map((m) => ({ source: m }));
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <h4 className={classes.title}>
        {productTypeName}
        :
        {' '}
        {productName}
      </h4>
      <h5>
        SKU:
        { ' ' }
        { productCode }
      </h5>
      <h6>{ balance }</h6>
      <div>
        <GridContainer style={{ padding: '15px' }}>
          <GridItem xs={12} sm={12} md={12}>
            <ProductImages images={photos} name={productName} />
            <br />
            <br />
            <br />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <ExpansionPanelSummary
                expanded
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{ expanded: classes.expandedPanel }}
              >
                <Typography className={classes.heading}>Description</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  { description }
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                classes={{ expanded: classes.expandedPanel }}
              >
                <Typography className={classes.heading}>Product Detail</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  { detail }
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{ expanded: classes.expandedPanel }}
              >
                <Typography className={classes.heading}>Additional Information</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  { additionalInformation }
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{ expanded: classes.expandedPanel }}
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
