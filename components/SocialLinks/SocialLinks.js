/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/nextjs-material-kit/components/badgeStyle';

const useStyles = makeStyles(styles);

export default function SocialLinks() {
  const classes = useStyles();
  return (
    <div>
      <Button
        href="https://twitter.com/pixelprintltd"
        target="_blank"
        justIcon
        link
        className={classes.margin5}
      >
        <i className="fab fa-twitter" />
      </Button>
      <Button
        justIcon
        link
        href="https://www.instagram.com/led_lights_and_parts/"
        target="_blank"
        className={classes.margin5}
      >
        <i className="fab fa-instagram" />
      </Button>
      <Button
        href="https://www.facebook.com/LedLightsAndParts"
        target="_blank"
        justIcon
        link
        className={classes.margin5}
      >
        <i className="fab fa-facebook" />
      </Button>
      <Button
        href="https://www.youtube.com/channel/UChwcs8KIeeI7gFh614Phe3g"
        target="_blank"
        justIcon
        link
        className={classes.margin5}
      >
        <i className="fab fa-youtube" />
      </Button>
    </div>
  );
}
