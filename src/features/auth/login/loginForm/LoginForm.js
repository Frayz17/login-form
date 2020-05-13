import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './styles';

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3)
    .max(15)
    .required(),
  password: Yup.string()
    .min(8)
    .max(60)
    .required(),
});

const Login = () => {
  const classes = styles();

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({
        values, handleSubmit, handleChange, handleBlur,
      }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="standard"
            margin="normal"
            name="username"
            type="text"
            fullWidth
            className={classes.input}

            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder="Username"
          />
          <div className={classes.error}>
            <ErrorMessage name="username" />
          </div>

          <TextField
            variant="standard"
            margin="normal"
            name="password"
            fullWidth
            className={classes.input}

            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Password"
          />
          <div className={classes.error}>
            <ErrorMessage name="password" />
          </div>

          <Box className={classes.params}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={<Typography className={classes.checkboxLabel}>Remember Me</Typography>}
            />
            <Button className={classes.forgotPassword}>Forgot Password</Button>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      )}
    </Formik>
  );
};


export default Login;
