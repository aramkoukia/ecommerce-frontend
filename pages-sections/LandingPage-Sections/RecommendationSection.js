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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '../../components/CustomButtons/Button.js';

const marks = [
  {
    value: 0,
    label: '0 Inch',
  },
  {
    value: 50,
    label: '50 Inch',
  },
  {
    value: 250,
    label: '250 Inch',
  },
  {
    value: 500,
    label: '500 Inch',
  },
  {
    value: 1000,
    label: '1000 Inch',
  },
];

const lumenMarks = [
  {
    value: 50,
    label: '50 Lumen',
  },
  {
    value: 800,
    label: '800 Lumen',
  },
  {
    value: 1000,
    label: '1000 Lumen',
  },
  {
    value: 2000,
    label: '2000 Lumen',
  },
];

function valueText(value) {
  return `${value} Inch`;
}

function lumenText(value) {
  return `${value} Lumen`;
}

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

function createData(name, code, amount, unitPrice, total) {
  return {
    name, code, amount, unitPrice, total,
  };
}

const rows = [
  createData('SMART 12V 12.5A 150W Dimmable SMT-012-150VT', '666561564789', 10, 150.56, 545.08),
  createData('FS-3528-3500-60-12-NS 10m (per liner foot)', '666561416294', 6, 350.56, 969.08),
  createData('LED Module 5050 Back Lighting 12V 4 LEDs 6000k Pack of 20', '666561545588', 1, 122.56, 122.56),
];

function getSteps() {
  return ['Select Application / Use Case', 'Select Color Temperature', 'Select Lumen', 'Select Length and Height', 'Product List / Quote'];
}

function getStepContent(step, handleBack, handleNext, label, steps) {
  const classes = useStyles();
  switch (step) {
    case 0:
      return (
        <div className={classes.actionsContainer}>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={4}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={require('../../assets/img/application/office-light.jpg')}
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
                      onClick={handleNext}
                    >
                      Select
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={require('../../assets/img/application/home-light.jpg')}
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
                      onClick={handleNext}
                    >
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
            <Grid container xs={12} spacing={3}>
              <Grid item xs={3} sm={3}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={require('../../assets/img/application/ultra-warm.png')}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Ultra Warm White
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Some description about Ultra Warm White specs
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
              <Grid item xs={3} sm={3}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={require('../../assets/img/application/warm.png')}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Warm White
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Some description about Warm White specs
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
              <Grid item xs={3} sm={3}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={require('../../assets/img/application/natural.png')}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Natural White
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Some description about Natural White specs
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
              <Grid item xs={3} sm={3}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={require('../../assets/img/application/cool.png')}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Cool White
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Some description about Cool White specs
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
            </Grid>
            <Button
              onClick={handleBack}
              className={classes.button}
              size="sm"
            >
              Back
            </Button>
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <br />
          <Slider
            defaultValue={800}
            getAriaValueText={lumenText}
            aria-labelledby="discrete-slider-always"
            step={10}
            max={2000}
            marks={lumenMarks}
            valueLabelDisplay="on"
          />
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
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            Next
          </Button>
        </div>
      );
    case 3:
      return (
        <div className={classes.actionsContainer}>
          <div>
            <br />
            <Slider
              defaultValue={250}
              max={1000}
              getAriaValueText={valueText}
              aria-labelledby="discrete-slider-always"
              step={1}
              marks={marks}
              valueLabelDisplay="on"
            />
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
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              Next
            </Button>
          </div>
        </div>
      );
    case 4:
      return (
        <div className={classes.actionsContainer}>
          <div>
            Based on your Custom Application, here is all the products that you need:
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Code</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Unit Price&nbsp;($)</TableCell>
                    <TableCell align="right">Total&nbsp;($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                      <TableCell>{row.code}</TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                      <TableCell align="right">{row.unitPrice}</TableCell>
                      <TableCell align="right">{row.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Button
              disabled={step === 0}
              onClick={handleBack}
              className={classes.button}
              size="sm"
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
              size="sm"
            >
              Email Me the Quote
            </Button>
          </div>
        </div>
      );
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
      <br />
      <Typography variant="h3" color="textSecondary" align="center">Custom Applications</Typography>
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
          <Typography>All Done! You should receive this Quote in your email shortly!</Typography>
          <Button onClick={handleReset} className={classes.button} size="sm">
            Start Another Custom Application
          </Button>
        </Paper>
      )}
    </div>
  );
}
