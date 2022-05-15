import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import {useState} from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        ONPR
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email || !password) {
          setError('Please enter email and password');
          return;
      }
        setIsLoading(true);

        console.log(email, password);
        try {
            const response = await axios.post('/login/', {
                email,
                password
            });
           console.log(response.data.access_token, response.data.data);
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('user', JSON.stringify(response.data.data));
            setIsLoading(false);
           window.location.href = '/admin';
        } catch (error) {
            setError(error?.response?.data?.message);
            setIsLoading(false);
        }
    }



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Se Connecter
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email} placeholder="Email" onChange={(e) => setEmail(() => e.target.value)}
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
              value={password} onChange={(e) => setPassword(() => e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>

            { error && (
                <div>
                    <Alert severity="error">{error}</Alert>
                </div>
            )}
           { !error && isLoading && (
            <div>
                <CircularProgress color="inherit" />
             </div>
          )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}


// import axios from 'axios';
// import {useState} from 'react';

// const Login = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);

//         console.log(email, password);
//         try {
//             const response = await axios.post('login/', {
//                 email,
//                 password
//             });
//            // console.log(response.data.access_token, response.data.data);

//             localStorage.setItem('token', response.data.access_token);
//             localStorage.setItem('user', JSON.stringify(response.data.data));
//             setIsLoading(false);
//            window.location.href = '/admin';
//         } catch (error) {
//             setError(error.response.data.message);
//             setIsLoading(false);
//         }
//     }
//     return ( <div>
//         <h1>Login</h1>
//         <form action="" onSubmit={handleSubmit}>
//             <label htmlFor="">Email</label>
//             <input type="text" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(() => e.target.value)}/>
//             <label htmlFor="">Password</label>
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(() => e.target.value)}/>
//             <button type="submit">Login</button>
//         </form>

//         {isLoading && (
//             <div>
//                 Is Loading...
//             </div>
//         )}
//         {error && (
//             <div>
//                 {error}
//             </div>
//         )}
//     </div> );
// }
 
// export default Login;
