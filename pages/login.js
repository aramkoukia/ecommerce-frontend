/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import Search from '@material-ui/icons/Search';
import Header from '../components/Header/Header';
import HeaderLinks from '../components/Header/HeaderLinks';
import Footer from '../components/Footer/Footer';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '../components/CustomButtons/Button';
import Card from '../components/Card/Card';
import CardBody from '../components/Card/CardBody';
import CardHeader from '../components/Card/CardHeader';
import CardFooter from '../components/Card/CardFooter';
import CustomInput from '../components/CustomInput/CustomInput';
import styles from '../assets/jss/nextjs-material-kit/pages/loginPage';
import image from '../assets/img/bg7.jpg';

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(() => {
    setCardAnimation('');
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="LED Lights and Parts"
        leftLinks={<HeaderLinks />}
        rightLinks={(
          <div>
            <CustomInput
              white
              inputRootCustomClasses={classes.inputRootCustomClasses}
              formControlProps={{
                className: classes.formControl,
                width: '100%',
              }}
              inputProps={{
                placeholder: 'Search',
                inputProps: {
                  'aria-label': 'Search',
                  width: '100%',
                  className: classes.searchInput,
                },
              }}
            />
            <Button justIcon round color="white">
              <Search className={classes.searchIcon} />
            </Button>
          </div>
        )}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
                  <CardBody>
                    <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: 'email',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: 'password',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: 'off',
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      Get started
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
