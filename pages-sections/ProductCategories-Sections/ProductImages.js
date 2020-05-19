/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Card from '../../components/Card/Card';

export default function ProductImages({ images, name }) {
  return (
    <GridContainer>
      {images.map(({ source }) => (
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <img src={source} alt={name} />
          </Card>
        </GridItem>
      ))}
    </GridContainer>
  );
}
