import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Grid from '@material-ui/core/Grid';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "../../components/CustomButtons/Button.js";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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

function getSteps() {
  return ['Select Application / Use Case', 'Select Color Temperature', 'Select Lumin', 'Select Length and Height', 'Product List / Quote'];
}

function getStepContent(step, handleBack, handleNext, label, steps) {
  const classes = useStyles();
  switch (step) {
    case 0:
      return (
          <div className={classes.actionsContainer}>
            <div>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3}>
              <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("../../assets/img/application/office-light.jpg")}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Office
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Some description about Office application specs
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="sm"
                color="primary"
                onClick={handleNext}>
                Select
              </Button>
            </CardActions>
          </Card>
              </Grid>
              <Grid item xs={6} sm={3}>
              <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("../../assets/img/application/home-light.jpg")}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Home
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Some description about Home application specs
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="sm"
                color="primary"
                onClick={handleNext}>
                Select
              </Button>
            </CardActions>
          </Card>
              </Grid>
           </Grid>              
            </div>
          </div>            
           );
    case 1:
      return (
          <div className={classes.actionsContainer}>
            <div>
              <Button
                disabled={step === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {step === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>            
    );
    case 2:
      return (
          <div className={classes.actionsContainer}>
            <div>
              <Button
                disabled={step === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
            </div>
    </div>);
    case 3:
      return (
          <div className={classes.actionsContainer}>
            <div>
              <Button
                disabled={step === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
            </div>
    </div>);    
    case 4:
      return (
      <div>
        <Typography>{label}</Typography>
          <div className={classes.actionsContainer}>
            <div>
              <Button
                disabled={step === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Finish
              </Button>
            </div>
          </div>            
    </div>);    
    default:
      return 'Unknown step';
  }
}

export default function RecommendationSection() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

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
    <div>
      <Typography variant='h3' color='textSecondary' align='center'>Custom Applications</Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index, handleBack, handleNext, label, steps)}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
