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

// function createData(name, code, amount, unitPrice, total) {
//   return {
//     name, code, amount, unitPrice, total,
//   };
// }

// const rows = [
//   createData('SMART 12V 12.5A 150W Dimmable SMT-012-150VT', '666561564789', 10, 150.56, 545.08),
//   createData('FS-3528-3500-60-12-NS 10m (per liner foot)', '666561416294', 6, 350.56, 969.08),
//   createData('LED Module 5050 Back Lighting 12V 4 LEDs 6000k Pack of 20',
//  '666561545588', 1, 122.56, 122.56),
// ];

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
          <Typography>All Done! You should receive this Quote in your email shortly!</Typography>
          <Button onClick={handleReset} className={classes.button} size="sm">
            Start Another Custom Application
          </Button>
        </Paper>
      )}
    </div>
  );
}
