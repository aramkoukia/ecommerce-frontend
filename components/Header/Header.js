/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/icons/Menu';
import {
  AppBar, Toolbar, Button, Hidden, Drawer, IconButton,
} from '@material-ui/core';
import styles from '../../assets/jss/nextjs-material-kit/components/headerStyle';

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const {
    color, rightLinks, leftLinks, brand, fixed, absolute,
  } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  const brandComponent = (
    <Link href="/home" as="/home">
      <Button className={classes.title}>{brand}</Button>
    </Link>
  );
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      {/* <TextField
        className={classes.textfield}
        placeholder="Search"
        // value={}
        onChange={(e) => this.setState({ searchfor: e.target.value })}
        margin="normal"
      /> */}
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: 'white',
};

Header.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'transparent',
    'white',
    'rose',
    'dark',
  ]).isRequired,
  rightLinks: PropTypes.node.isRequired,
  leftLinks: PropTypes.node.isRequired,
  brand: PropTypes.string.isRequired,
  fixed: PropTypes.bool.isRequired,
  absolute: PropTypes.bool.isRequired,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'transparent',
      'white',
      'rose',
      'dark',
    ]).isRequired,
  }).isRequired,
};
