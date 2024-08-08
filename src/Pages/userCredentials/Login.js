import * as React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

        }
        catch (error) {
            console.log(error);
        }
    };

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div>
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingTop: 10,
                        }}
                    >
                        <LoginIcon />
                        <Typography component="h1" variant="h5">
                            Login Form
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }} style={{ marginTop: '30px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    Don't have an account? {" "}
                                    <Link to='/signup' style={{ color: 'white' }}>
                                        SignUp
                                    </Link><br />
                                    <Link to='/changePassword' style={{ color: 'grey', marginLeft: '50px' }}>
                                        Forgot Password
                                    </Link>
                                </Grid>
                                <Grid >
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>

        </ThemeProvider>
    )
}

export default LoginForm
