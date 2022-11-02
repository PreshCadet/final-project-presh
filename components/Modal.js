import * as React from 'react';
import Box from '@mui/material/Box';
import Modal, { modalClasses } from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from 'react';
import { Firebaseauth } from '../context/firebase';
import Link from '@mui/material/Link';
import SignUp from '../pages/SignUp';


 
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #173646',
    boxShadow: 24,
    mt: 1,
    px: 4,
    pb: 3,
  };
 
  const theme = createTheme();
 
  const MODAL_STYLES = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
    overflowy: 'scroll'
}
 
const OVERLAY_STYLE = {
    position: 'absolute',
    overflowy: 'scroll',
    top:0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .7)',
    zIndex: 1000
}
 
 
// function authentication() {
 
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
 
// }
 
  export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const {auth,  isloggedin, setloggedin} = useContext(Firebaseauth);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
 
    const handleSubmitSignIn = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
      signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          alert("Succesfully Signed In");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode, ' : ', errorMessage);
        });
     
  };
 
    return (
      <div>
        <Button onClick={handleOpen}>Sign In</Button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={{ width: '75%' }} >
              <div style={OVERLAY_STYLE} />
             <div style={MODAL_STYLES}>
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <img src="https://img.icons8.com/material-rounded/24/000000/close-window.png" onClick={handleClose}/>
        <Box
          sx={{
            // marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#173646' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmitSignIn} noValidate sx={{ mt: 1 }}>
          {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#173646' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid>
              <Link href="SignUp" variant="body2">
                  Don't have an account? Sign up
                </Link>
              {/* <ChildModal /> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    </div>
          </Box>
        </Modal>
      </div>
    );
  }