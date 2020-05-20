/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuList, MenuItem } from '@material-ui/core';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import styles from '../../assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle';

const useStyles = makeStyles(styles);

export default function CategoryNavigation({ categories }) {
  const classes = useStyles();
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <h4>Browse By Product Category:</h4>
        <GridContainer>
          <MenuList>
            {categories.map(({
              productTypeName, slugsUrl,
            }) => (
              <GridItem xs={12} sm={12} md={12}>
                <MenuItem>
                  <a href={`/categories/${slugsUrl}`}>
                    {productTypeName}
                  </a>
                </MenuItem>
              </GridItem>
            ))}
          </MenuList>
        </GridContainer>
      </div>
    </div>
  );
}
