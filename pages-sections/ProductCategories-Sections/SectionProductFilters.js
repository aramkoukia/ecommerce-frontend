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
        <div className={classes.title}>
          <h2>Filters</h2>
        </div>
        <div className={classes.space50} />
        <div id="checkRadios">
          <GridContainer>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Checkboxes</h3>
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
                      onClick={() => handleToggle(21)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  )}
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Unchecked"
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
                      onClick={() => handleToggle(22)}
                      checked={checked.indexOf(22) !== -1}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  )}
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Checked"
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
                  disabled
                  control={(
                    <Checkbox
                      tabIndex={-1}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  )}
                  classes={{
                    label: classes.label,
                    disabled: classes.disabledCheckboxAndRadio,
                    root: classes.labelRoot,
                  }}
                  label="Disabled Unchecked"
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
                  disabled
                  control={(
                    <Checkbox
                      tabIndex={-1}
                      checked={checked.indexOf(24) !== -1}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  )}
                  classes={{
                    label: classes.label,
                    disabled: classes.disabledCheckboxAndRadio,
                    root: classes.labelRoot,
                  }}
                  label="Disabled Checked"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Radio Buttons</h3>
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
                  label="First Radio"
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
                  label="Second Radio"
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
                  disabled
                  control={(
                    <Radio
                      checked={false}
                      value="a"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot,
                      }}
                    />
                  )}
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot,
                  }}
                  label="Disabled Unchecked Radio"
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
                  disabled
                  control={(
                    <Radio
                      checked
                      value="b"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot,
                      }}
                    />
                  )}
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Disabled Checked Radio"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Toggle Buttons</h3>
              </div>
              <div>
                <FormControlLabel
                  control={(
                    <Switch
                      checked={checkedA}
                      onChange={(event) => setCheckedA(event.target.checked)}
                      value="checkedA"
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        thumb: classes.switchIcon,
                        track: classes.switchBar,
                      }}
                    />
                  )}
                  classes={{
                    label: classes.label,
                  }}
                  label="Toggle is on"
                />
              </div>
              <div>
                <FormControlLabel
                  control={(
                    <Switch
                      checked={checkedB}
                      onChange={(event) => setCheckedB(event.target.checked)}
                      value="checkedB"
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        thumb: classes.switchIcon,
                        track: classes.switchBar,
                      }}
                    />
                  )}
                  classes={{
                    label: classes.label,
                  }}
                  label="Toggle is off"
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space70} />
      </div>
    </div>
  );
}
