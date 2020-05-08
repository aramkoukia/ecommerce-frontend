import React from 'react';
import Slider from 'nouislider';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';
import Check from '@material-ui/icons/Check';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import styles from '../../assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle';

const useStyles = makeStyles(styles);

export default function SectionProductFilters() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState('b');
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  React.useEffect(() => function cleanup() {});
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div id="checkRadios">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.title}>
                <h3>Filters</h3>
              </div>
              <div
                className={
                  `${classes.checkboxAndRadio
                  } ${
                    classes.checkboxAndRadioHorizontal}`
                }
              >
                <FormControlLabel
                  control={(
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(1)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  )}
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Home"
                />
              </div>
              <div
                className={
                  `${classes.checkboxAndRadio
                  } ${
                    classes.checkboxAndRadioHorizontal}`
                }
              >
                <FormControlLabel
                  control={(
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(2)}
                      checked={checked.indexOf(2) !== -1}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  )}
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Office"
                />
                <FormControlLabel
                  control={(
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(3)}
                      checked={checked.indexOf(3) !== -1}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  )}
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Indoors"
                />
                <FormControlLabel
                  control={(
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(4)}
                      checked={checked.indexOf(4) !== -1}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  )}
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Outdoors"
                />                                
              </div>
              <div
                className={
                  `${classes.checkboxAndRadio
                  } ${
                    classes.checkboxAndRadioHorizontal}`
                }
              >
              </div>
              <div
                className={
                  `${classes.checkboxAndRadio
                  } ${
                    classes.checkboxAndRadioHorizontal}`
                }
              >
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.title}>
                <h3>Sort by:</h3>
              </div>
              <div
                className={
                  `${classes.checkboxAndRadio
                  } ${
                    classes.checkboxAndRadioHorizontal}`
                }
              >
                <FormControlLabel
                  control={(
                    <Radio
                      checked={selectedEnabled === 'a'}
                      onChange={() => setSelectedEnabled('a')}
                      value="a"
                      name="radio button enabled"
                      aria-label="A"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot,
                      }}
                    />
                  )}
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot,
                  }}
                  label="Most Popular"
                />
              </div>
              <div
                className={
                  `${classes.checkboxAndRadio
                  } ${
                    classes.checkboxAndRadioHorizontal}`
                }
              >
                <FormControlLabel
                  control={(
                    <Radio
                      checked={selectedEnabled === 'b'}
                      onChange={() => setSelectedEnabled('b')}
                      value="b"
                      name="radio button enabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot,
                      }}
                    />
                  )}
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot,
                  }}
                  label="Most Recent"
                />
              </div>
              <div
                className={
                  `${classes.checkboxAndRadio
                  } ${
                    classes.checkboxAndRadioHorizontal}`
                }
              >
              </div>
              <div
                className={
                  `${classes.checkboxAndRadio
                  } ${
                    classes.checkboxAndRadioHorizontal}`
                }
              >
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space70} />
      </div>
    </div>
  );
}
