/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import { Apps, Business, ContactPhone } from '@material-ui/icons';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import Button from '../CustomButtons/Button';
import styles from '../../assets/jss/nextjs-material-kit/components/headerLinksStyle';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/product-categories"
          color="transparent"
          className={classes.navLink}
        >
          <Apps className={classes.icons} />
          {' '}
          All Products
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Products"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/product-categories">
              <a className={classes.dropdownLink}>Flexible LED Strip</a>
            </Link>,
            <Link href="/product-categories">
              <a className={classes.dropdownLink}>LED Drivers AND Power Supplies</a>
            </Link>,
          ]}
        />
      </ListItem> */}
      {/* <ListItem className={classes.listItem}>
        <Button
          href="https://koukia.ca"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Custom Applications
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          href="/contact-us"
          color="transparent"
          className={classes.navLink}
        >
          <ContactPhone className={classes.icons} />
          {' '}
          Contact Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/about-us"
          color="transparent"
          className={classes.navLink}
        >
          <Business className={classes.icons} />
          {' '}
          About Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on Twitter"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/pixelprintltd"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fab fa-twitter`} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on Facebook"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/LedLightsAndParts"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fab fa-facebook`} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on Instagram"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/led_lights_and_parts/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fab fa-instagram`} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="youtube-tooltip"
          title="Subscribe to our Youtube channel"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.youtube.com/channel/UChwcs8KIeeI7gFh614Phe3g"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fab fa-youtube`} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
