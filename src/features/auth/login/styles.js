import { makeStyles } from '@material-ui/core/styles';
import smallImage from 'assets/images/background.jpg';
import image from 'assets/images/background@2x.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  actionPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  [theme.breakpoints.up('md')]: {
    image: {
      backgroundImage: `url(${image})`,
    },
  },
  [theme.breakpoints.down('md')]: {
    image: {
      backgroundImage: `url(${smallImage})`,
    },
  },

  header: {
    paddingTop: '10rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Poppins',
    color: '#43425d',
  },
  title: {
    width: 235,
    fontSize: 36,
    fontWeight: 300,
    textTransform: 'uppercase',
    margin: 0,
  },
  titleCart: {
    color: '#5fa01b',
    fontWeight: 800,
  },
  role: {
    marginTop: 20,
    marginBottom: 65,
    color: '#A6A7AD',
    fontSize: 18,
    fontWeight: 400,
    textAlign: 'center',
  },

}));

export default useStyles;
