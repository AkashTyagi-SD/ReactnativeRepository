import {Platform} from 'react-native';
import { makeStyles} from '@material-ui/core/styles';
import logo from '../../../../assets/defaultstr8line_logo.png';

const loginStyle = makeStyles(theme => ({
    paperlogo: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: (Platform.OS === 'android') ? 'center':'left',
      
    },
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  
    image: {
      image:{logo},
      backgroundRepeat: 'no-repeat',
      backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    hairline1: {
      marginTop: theme.spacing(2),
      backgroundColor: '#A2A2A2',
      height: 2,
      
    },
    hairline2: {
      marginTop: theme.spacing(2),
      backgroundColor: '#A2A2A2',
      height: 2,
      
    },  
  }));
  
  export default loginStyle;