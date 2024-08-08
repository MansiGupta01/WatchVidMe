import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomPagination from '../../components/pagination/CustomPagination';
import SingleContent from '../../components/singleContent/SingleContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from 'axios';

function Search() {
    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState(0);
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: "#fff",
            }
        },
    });

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=5696b1e28a692b39268f9395c6d25e68&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
            setContent(data.results);
            setNumOfPages(data.total_pages);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
    }, [type, page, searchText]);

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <div style={{ display: "flex", margin: "15px 0" }}>
                    <TextField
                        style={{ flex: 1 }}
                        className="searchBox"
                        label="Search"
                        variant="filled"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button
                        onClick={fetchSearch}
                        variant="contained"
                        style={{ marginLeft: 10 }}
                    >
                        <SearchIcon fontSize="large" />
                    </Button>
                </div>
                <Tabs
                    value={type}
                    indicatorColor='primary'
                    textColor='primary'
                    onChange={(event, newValue) => {
                        setType(newValue);
                        setPage(1);
                        setContent("");
                    }}
                    centered
                >
                    <Tab label="Search Movies" style={{ width: "50%" }} />
                    <Tab label="Search TV Series" style={{ width: "50%" }} />
                </Tabs>
            </ThemeProvider>
            <div className='trending'>
                {content.length ? (
                    content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            description={c.overview}
                            title={c.title || c.name}
                            releaseDate={c.release_date || c.first_air_date}
                            mediaType={type ? "tv" : "movie"}
                            voteAverage={c.vote_average}
                        />
                    ))
                ) : (
                    searchText && (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)
                )}
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
        </div>
    );
}

export default Search;
