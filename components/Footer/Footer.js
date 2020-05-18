/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/nextjs-material-kit/components/footerStyle';

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="product-categories"
                className={classes.block}
              >
                All Products
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/contact-us"
                className={classes.block}
              >
                Contact Us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/about-us"
                className={classes.block}
              >
                About us
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          <p>
            &copy;
            {' '}
            {1900 + new Date().getYear()}
            {' '}
            by
            {' '}
            <a
              href="http://lightsandparts.com/"
              className={aClasses}
              target="_blank"
            >
              LED Lights and Parts
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
