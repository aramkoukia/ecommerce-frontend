/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Marker from './Marker';
import GoogleMap from './GoogleMap';
import GoogleMapReact from 'google-map-react';
import styles from '../../assets/jss/nextjs-material-kit/components/badgeStyle';

// const useStyles = makeStyles(styles);

export default function LocationInfo({ zoom, center, places }) {
  // Return map bounds based on list of places
  const LOS_ANGELES_CENTER = [34.0522, -118.2437];
  const getMapBounds = (map, maps) => {
    const bounds = new maps.LatLngBounds();

    places.forEach((place) => {
      bounds.extend(new maps.LatLng(
        place.geometry.location.lat,
        place.geometry.location.lng,
      ));
    });
    return bounds;
  };

  // Re-center map when resizing the window
  const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };

  // Fit map to its bounds after the api is loaded
  const apiIsLoaded = (map, maps) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '30vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
  );
}
