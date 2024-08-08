import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom'; // Import Link

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                left: 0,
                opacity: 0.8,
                zIndex: 100,
                boxShadow: 3
            }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        component={Link}
                        to="/"
                        label="Trending"
                        icon={<WhatshotIcon />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to="/movies"
                        label="Movies"
                        icon={<MovieIcon />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to="/tvseries"
                        label="TVSeries"
                        icon={<LiveTvIcon />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to="/search"
                        label="Search"
                        icon={<SearchIcon />}
                    />
                </BottomNavigation>
            </Box>
        </ThemeProvider>
    );
}
