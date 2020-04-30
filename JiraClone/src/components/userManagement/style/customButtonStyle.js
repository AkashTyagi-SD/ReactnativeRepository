import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';

//Make custom button
const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText('#00bfbf'),
      backgroundColor:'#00bfbf',
      '&:hover': {
        backgroundColor: red[700],
        
      },
    },
  }))(Button);

  export default ColorButton;