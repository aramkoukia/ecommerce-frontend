/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import styles from '../../assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle';

const useStyles = makeStyles(styles);

export default function CategoryNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
