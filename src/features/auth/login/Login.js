import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TermsOfUse from 'components/termsOfUse';
import LoginForm from './loginForm/LoginForm';
import useStyles from './styles';

const Login = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>

      <Grid item sm={false} md={6} className={classes.image} />

      <Grid className={classes.actionPanel} item xs={12} sm={12} md={6} elevation={6}>
        <Box className={classes.header}>
          <Box>
            <h2 className={classes.title}>
              <span className={classes.titleCart}>Cart</span>
              &Order
            </h2>
            <Box className={classes.role}>Admin</Box>
          </Box>

          <LoginForm />
        </Box>

        <Box>
          <TermsOfUse />
        </Box>
      </Grid>

    </Grid>
  );
};


export default Login;
