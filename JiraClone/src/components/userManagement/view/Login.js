import React ,{useEffect}from 'react';
import {Platform,
        View,
        Image
       } from 'react-native';
import {CssBaseline,
        TextField,
        FormControl,
        Link ,
        Grid,
        Box,
        Typography,
        Container,
        IconButton,
        InputAdornment,
        OutlinedInput,
        InputLabel,
        FormControlLabel,
        Checkbox
} from '@material-ui/core';

import {Visibility,
       VisibilityOff
       }from '@material-ui/icons';
import logo from '../../../../assets/defaultstr8line_logo.png';
import dimens from '../../../resources/dimens/dimen';
import validate from 'validate.js';
import language from '../../../resources/strings/en.json';
import Toast from '../../commonComponent/feedback/Toast';
/***For Style */
import style from '../style/style';
import * as userService from '../userService/userService';
import ProgressBar from '../../commonComponent/feedback/ProgressBar';
import loginStyle from '../style/loginStyle';
import ColorButton from '../style/customButtonStyle';


const schema = {
  email: {
    presence: { allowEmpty: false, message: language.requiredvalue },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: language.requiredvalue },
    length: {
      maximum: 128
    }
  }
};


export default function Login({navigation}){
 
    const classes = loginStyle;

    const [open, setOpen]=React.useState(false);
    const [msg,setMsg]=React.useState('');
    const [type,setType]=React.useState('');
    const [status,setStatus]=React.useState(false);
    const [isremember,setIsremember]=React.useState(false);
    const [remember,setRemember]=React.useState(0);
    const [userid,setUserid]=React.useState(0);
    const [usertyperegistratonid,setUsertyperegistratonid]=React.useState(0);
    const [usertype,setUsertype]=React.useState(''); 
    const [userEmail,setUserEmail]=React.useState(''); 
    const [userName,setUserName]=React.useState('');
    const [userlanguage,setUserlanguage]=React.useState('english');
    const [vertical,setVertical]=React.useState('top');
    const [horizontal,setHorizontal]=React.useState('center');
    const logoutresponse = navigation.getParam('logoutresponsedata',[]);
    const loginstatus=navigation.getParam('isLoggined',false);
    
    const count = Object.keys(logoutresponse).length;
    const [loading,setLoading]=React.useState(false);
    //var oldpassword=navigation.getParam('password','');;

   /**
   * Description:Change state every time on call onchange function
   */
  const [formState, setFormState] =React.useState({
    isValid: false,
    showPassword: false,
    values: {},
    touched: {},
    errors: {}
  });

     
  /**
   * Description:Callback function
   */
  useEffect(() => {
    console.log("logoutresponse",JSON.stringify(logoutresponse));

    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]
  );


  /**
   * Description:To Do bind data after logout
   */
// const bindData = ()=>{
//   console.log("login bind data call");

//   if(count !== 0){
//     if(logoutresponse.isremember === 0){
//       console.log("isremeber",logoutresponse.isremember);
//       setIsremember(false);
//       setRemember(0);  //false
//       setFormState(formState => ({
//         ...formState,
//         values: {
//           ...formState.values, email :''
//         },
//       }));
//       setFormState(formState => ({
//         ...formState,
//         values: {
//           ...formState.values,password:''
//         },
//       }));
//      //setIsLogined(false);
//      navigation.setParams({isLoggined :false});
//     }else{
//       setIsremember(true);
//       setRemember(1);
//       setFormState(formState => ({
//         ...formState,
//         values: {
//           ...formState.values,email :logoutresponse.email
//         },
//       }));
//       localStorage.retrieveData("password").then(
//            (value) =>{
//             setFormState(formState => ({
//               ...formState,
//               values: {
//                 ...formState.values,password :value
//               },
//             }));
//           }
//           );
         
     
//       //setIsLogined(false);
//       navigation.setParams({isLoggined :false});
//     } 
//   }
// }


/**
 * Description:This function called to bind data for is remember functionalty
 */
//   useEffect(() => {
//     console.log("logoutresponse",JSON.stringify(logoutresponse));
//     console.log("count",count);
//     console.log("loginstatus",loginstatus);
    
//    if(loginstatus){
//     // localStorage.retrieveData("password").then(
//     //   (value) =>{
//     //    oldpassword=value; 
//     //   }
//     //  );
//     bindData();
//   }
//   },);
  
  
    /**
     * Description:Call this function on click Next button
     * @param {*} event 
     */
//     const handleClick = () => {
//      const email=formState.values.email;
//      const password=formState.values.password;
//      setLoading(true);
//     userService.login(email,password,remember)
//    .then(response => {
//     console.log("status",response.status);
//          if(response.status === true) {
//                       setOpen(true);
//                       setType('success');
//                       setMsg(response.message);
//                       setStatus(response.status);
//                       setUserid(response.data.userid);
//                       setUsertyperegistratonid(response.data.usertyperegistratonid);
//                       setUsertype(response.data.usertype); 
//                       setUserEmail(response.data.email);
//                       setUserlanguage(response.data.languagecode);
//                       //setUserName(response.data.);
//                       setLoading(false);
//                         localStorage.storeData("userid",response.data.userid);
//                         localStorage.storeData("userlanguage",response.data.languagecode);
//                         localStorage.storeData("usertyperegistrationid",response.data.usertyperegistratonid);
//                         localStorage.storeData("usertype",response.data.usertype);
//                         localStorage.storeData("useremail",response.data.email);
                       
//                         // localStorage.retrieveData("userid").then(
//                         //  (value) =>{
//                         //   console.log("savelocal",value);
//                         //  }
//                         // );
//                         // localStorage.retrieveData("userlanguage").then(
//                         //   (value) =>{
//                         //    console.log("userlanguage",value);
//                         //   }
//                         //  );
                    
//                       //setIsLogined(true);
//                     }else{
//                       setOpen(true);
//                       setType('error');
//                       setMsg(response.message);
//                       setStatus(response.status);
//                       setLoading(false);
//                        //setIsLogined(true);
//                      // AsyncStorage.setItem("message",response.message);
//                       console.log("message",response.message);
//                     }   
//        }).catch((error) =>{
//              console.error(error);
//        });
//     };
  
    /**
     * Description:Callback function after api call
     */
    const handleClose = () => {
      setOpen(false);
      if(status === true)
      {
        const password=formState.values.password;
        localStorage.storeData("password",formState.values.password);
         //setIsLogined(true);
        navigation.navigate('Main',{userid:userid,usertyperegistratonid:usertyperegistratonid,usertype:usertype
        ,userEmail:userEmail,userlanguage:userlanguage});
       // navigation.navigate('Main');
      }else{
       
      }
    };
    
    /**
     * Description:To do set state of Is remember checkbox value
     * @param {*} event 
     */
    const handleChangeCheckbox = (event) => {
      setIsremember(event.target.checked);
      if(event.target.checked === true){
        setRemember(1);   //true
      }else{
        setRemember(0);  //false
      }
    };
  
//Show Toast after click event
    const showToast =(open,msg,type)=>{ 
     //setIsLogined(false);
      console.log("usertype",logoutresponse.usertype);
      

      return(
    <Toast
     open={open}
     handleClose={handleClose}
     type={type}
     msg={msg}
    />
   )
    }

    /**
     * Description:This function call on type character inside input text
     * @param {} prop 
     */
     const handleChange = prop => event => {
         event.persist();
         //setValues({ ...formState.values, [prop]: event.target.value });
         setFormState(formState => ({
          ...formState,
          values: {
            ...formState.values,[prop]:event.target.value
          },
          touched: {
            ...formState.touched,
            [event.target.name]: true
          }
        }));
     };
  
     /**
      * Description:This function call on click show/hide button inside password box
      */
    const handleClickShowPassword = () => {
      //setValues({ ...formState.values, showPassword : !formState.values.showPassword });
      setFormState(formState => ({
        ...formState,
        values: {
          ...formState.values,showPassword :!formState.values.showPassword
        }
      }));
    };
  
    const handleMouseDownPassword = event => {
      event.preventDefault();
    };

    const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <Container component="main" >
      <CssBaseline />
      <View className={classes.paperlogo} >
       <Image style={{ width: dimens.logoWidth, height: dimens.logoHeight }} source={logo} /> 
      </View>
      <Container component="main" maxWidth="sm">

<Grid justify="center">
 <ProgressBar 
 loading={loading}
 />
</Grid>
    <View className={classes.paper}>

    <Typography component="h1" variant="h6">
      <Box fontWeight="fontWeightBold" m={1}>
      {language.welcometostr8line}
      </Box>
      </Typography>
        <Grid container justify="center">
            <Grid item xs={10} align="center"  >
            <Typography
                  color="textSecondary"
                  variant="body1"
                  fontWeight="fontWeightBold"
                >
                  {language.newtostr8line}{'?  '}
                  <Link
                    variant="h7"
                    underline="hover"
                    color="textPrimary"
                    onClick={()=>{navigation.navigate('Welcome')}}
                  >
                    {language.signuphere}
                  </Link>
                </Typography>
            </Grid>
           
          </Grid>
      <form className={classes.form}
      >
        <Grid container spacing={2} justify="center">
          <Grid item xs={10}>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label={language.email}
              name="email"
              error={hasError('email')}
              helperText={
                hasError('email') ? formState.errors.email[0] : null
              }
              onChange={handleChange('email')}
              value={formState.values.email || ''}
              InputProps={{ inputProps: { style: {   borderRadius: 0 }, }, style: { borderRadius: 0 }, }}
              type="email"
              size='small'
            />
          </Grid>
          <Grid item xs={10}>
          <FormControl variant="outlined"
           fullWidth
           size='small'
          >
          <InputLabel htmlFor="filled-adornment-password">{language.password}</InputLabel>
          <OutlinedInput
            id="password"
            style = {style.radiusBorder}
            type={formState.values.showPassword ? 'text' : 'password'}
            error={hasError('password')}
            helperText={
             hasError('password') ? formState.errors.password[0] : null
           }
            onChange={handleChange('password')}
            value={formState.values.password || ''}
            //onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {formState.values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
          </Grid>
          <Grid item xs={10}>
          <FormControlLabel
            control={<Checkbox 
              checked={isremember}
              onChange={handleChangeCheckbox}
              color="#00bfbf" />}
              label={language.rememberme}
          /></Grid>
          <Grid container item xs={10} justify="flex-end">
            <Grid item>
              <Link variant="body2" color="textPrimary" onClick={()=>{navigation.navigate('ForgotPassword')}} >
                {language.forgotpassword}{'?'}
              </Link>
            </Grid>
          </Grid>
          <Grid container item xs={10} justify="flex-end">
            <Grid>
          <ColorButton
          size='large'
          variant="contained"
          style = {style.radiusBorder}
          color="primary"
          className={classes.submit}
          disabled={!formState.isValid}
          onClick={handleClick}
        >
         {language.signin}
        </ColorButton>
            </Grid>
           {console.info("render",open)}
            {showToast(open,msg,type)}
           
          </Grid>
          <Grid container direction="row" justify="center">
        <Grid className={classes.hairline1} item xs ={(Platform.OS === 'android') ? 2 : 3}>
         </Grid>
         <Grid item xs={(Platform.OS === 'android') ? 6 : 4}>
         <Typography variant="h7">
         <Box fontWeight="fontWeightBold" m={1}>
         {language.orSigninwithoneclick}
         </Box>
         </Typography>
         </Grid>
         <Grid className={classes.hairline2} item xs={(Platform.OS === 'android') ? 2 : 3}>
         </Grid></Grid>
      <Grid container justify="center">
      
      <Image style={{ width: 40, height: 40 }} source={icon_facebook} />
      
      <Image style={{ width: 40, height: 40 }} source={icon_linkedin} />
      
      <Image style={{ width: 40, height: 40 }} source={icon_googleplus} /></Grid> 
        </Grid>
        
      </form>
    </View>
    <Box mt={5}>
      <Copyright />
    </Box> 
  </Container>
  </Container>
  );
}



