import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
    width: 400,
  },
  rememberMeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontFamily: 'Poppins',
    fontSize: 14,
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
  },
  error: {
    color: 'red',
    minHeight: 20,
  },
}));

export default useStyles;
