import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const TermsOfUse = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.caption} align="center">
      Term of use. Privacy policy
    </Typography>
  );
};

export default TermsOfUse;
