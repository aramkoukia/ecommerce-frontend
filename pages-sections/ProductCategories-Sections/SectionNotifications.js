import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import Warning from '@material-ui/icons/Warning';
import SnackbarContent from '../../components/Snackbar/SnackbarContent';
import Clearfix from '../../components/Clearfix/Clearfix';
import styles from '../../assets/jss/nextjs-material-kit/pages/componentsSections/notificationsStyles';

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="notifications">
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Notifications</h3>
        </div>
      </div>
      <SnackbarContent
        message={(
          <span>
            <b>INFO ALERT:</b>
            {' '}
            You
            '
            ve got some friends nearby, stop looking
            at your phone and find them...
          </span>
        )}
        close
        color="info"
        icon="info_outline"
      />
      <SnackbarContent
        message={(
          <span>
            <b>SUCCESS ALERT:</b>
            {' '}
            You
            '
            ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        )}
        close
        color="success"
        icon={Check}
      />
      <SnackbarContent
        message={(
          <span>
            <b>WARNING ALERT:</b>
            {' '}
            You
            '
            ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        )}
        close
        color="warning"
        icon={Warning}
      />
      <SnackbarContent
        message={(
          <span>
            <b>DANGER ALERT:</b>
            {' '}
            You
            '
            ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        )}
        close
        color="danger"
        icon="info_outline"
      />
      <Clearfix />
    </div>
  );
}
