/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Card from '../../components/Card/Card';

export default function ProductImages({ images, name }) {
  return (
    <GridContainer>
      {images.map(({ source }) => (
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <ReactImageMagnify {...{
              enlargedImagePosition: 'over',
              smallImage: {
                alt: name,
                isFluidWidth: true,
                src: source,
              },
              largeImage: {
                src: source,
                width: 1200,
                height: 1800,
              },
            }}
            />
          </Card>
        </GridItem>
      ))}
    </GridContainer>
  );
}
