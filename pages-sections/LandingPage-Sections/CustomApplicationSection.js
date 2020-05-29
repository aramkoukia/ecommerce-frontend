/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Grid from '@material-ui/core/Grid';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Slider from '@material-ui/core/Slider';
import CustomInput from '../../components/CustomInput/CustomInput';
import Button from '../../components/CustomButtons/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  media: {
    height: 140,
  },
}));

function getStepContent(step, handleBack, handleNext) {
  const classes = useStyles();
  const {
    isRangeValue, minValue, maxValue, valueUnit, stepDescription,
    stepDetails,
  } = step;

  const gridSize = stepDetails.length > 2 ? 3 : 4;

  function valueText(value) { return `${value} ${valueUnit}`; }

  const marks = [
    {
      value: minValue,
      label: `${minValue} ${valueUnit}`,
    },
    {
      value: maxValue,
      label: `${maxValue} ${valueUnit}`,
    },
  ];

  if (isRangeValue) {
    return (
      <div className={classes.actionsContainer}>
        <div>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {/* Office */}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {stepDescription}
                </Typography>
                <br />
                <Slider
                  defaultValue={(maxValue - minValue) / 2}
                  min={minValue}
                  max={maxValue}
                  getAriaValueText={valueText}
                  aria-labelledby="discrete-slider-always"
                  step={1}
                  marks={marks}
                  valueLabelDisplay="on"
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                disabled={step === 0}
                onClick={handleBack}
                className={classes.button}
                size="sm"
              >
                Back
              </Button>
              <Button
                size="sm"
                color="primary"
                onClick={handleNext}
              >
                Select
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.actionsContainer}>
      <div>
        <Grid container spacing={3}>
          {stepDetails.map((stepDetail) => {
            const { stepDetailTitle, stepDetailDescription, thumbnailImagePath } = stepDetail;
            return (
              <Grid item xs={6} sm={gridSize}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={thumbnailImagePath}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {stepDetailTitle}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {stepDetailDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="sm"
                      color="primary"
                      onClick={handleNext}
                    >
                      Select
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        {/* <Button
          onClick={handleBack}
          className={classes.button}
          size="sm"
        >
          Back
        </Button> */}
      </div>
    </div>
  );
}

export default function CustomApplicationSection({ customApplications }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>&nbsp;&nbsp;Custom Applications</h2>
      <Stepper activeStep={activeStep} orientation="vertical">
        {customApplications.map((step, index) => {
          const { stepTitle } = step;
          return (
            <Step key={index}>
              <StepLabel>{stepTitle}</StepLabel>
              <StepContent>
                {getStepContent(step, handleBack, handleNext)}
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === customApplications.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Typography color="success">
                All Done!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomInput
                inputRootCustomClasses={classes.inputRootCustomClasses}
                formControlProps={{
                  className: classes.formControl,
                }}
                inputProps={{
                  placeholder: 'Enter the Email address on your Account',
                  inputProps: {
                    'aria-label': 'Enter the Email address on your Account',
                  },
                  style: {
                    width: '600px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button color="primary" href="/draft-invoice" className={classes.button}>
                Get Product List
              </Button>
              <Button onClick={handleReset} className={classes.button}>
                Start Another Custom Application
              </Button>
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
}
