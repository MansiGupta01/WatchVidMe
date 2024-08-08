import * as React from 'react';
import LockResetIcon from '@mui/icons-material/LockReset';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

function Forget() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    const handleClick = async (e) => {
        e.preventDefault();
        try {

        }
        catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = (e) => {
        navigate('/login');
    }
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
                            paddingTop: 10
                        }}
                    >
                        <LockResetIcon sx={{ fontSize: 60 }} />
                        <Typography component="h1" variant="h5">
                            Reset Password
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }} style={{ marginTop: '30px' }}>
                            <Grid container spacing={2} justifyContent="center" >
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
                            </Grid>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: '5px' }}>
                                <Link to='/login'>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                    >
                                        Login
                                    </Button>
                                </Link>
                                <Button
                                    type='button'
                                    variant="contained"
                                    onClick={handleClick}
                                >
                                    Reset
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </div>

        </ThemeProvider>
    )
}

export default Forget;
