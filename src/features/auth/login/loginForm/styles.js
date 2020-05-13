import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    width: 400,
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    fontSize: 15,
    marginBotton: 50,
  },
  params: {
    marginTop: 20,
    marginBottom: 100,
    color: '#43425d',
    fontFamily: 'Poppins',
    fontSize: 14,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  rememberMeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontFamily: 'Poppins',
    fontSize: 14,
    marginLeft: 6,
  },

  forgotPassword: {
    color: '#43425d',
    fontFamily: 'Poppins',
    textTransform: 'none',
  },
  submit: {
    marginBottom: 65,
    width: 268,
    height: 56,
    borderRadius: 40,
    textTransform: 'none',
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
  error: {
    color: 'red',
    minHeight: 20,
  },

  [theme.breakpoints.down('xs')]: {
    form: {
      width: '85%',
    },
  },

  // checkbox icon styles
  checkboxRoot: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    width: 18,
    height: 18,
    border: '1px solid #43425d',
    borderRadius: 4,
    cursor: 'pointer',
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#5fa01b',
    '&:before': {
      display: 'block',
      width: 18,
      height: 18,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#568f1a',
    },
  },
  // end checkbox icon styles
}));

export default useStyles;
