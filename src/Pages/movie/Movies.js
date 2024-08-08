import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CustomPagination from '../../components/pagination/CustomPagination';
import SingleContent from '../../components/singleContent/SingleContent';
import '../trending/Trending.css';
import Genres from '../../components/genre/Genres';
import useGenre from '../../components/hooks/useGenre';
function Movies() {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();
    const [genre, setGenre] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState([]);
    const genreforURL = useGenre(selectedGenre);
    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=5696b1e28a692b39268f9395c6d25e68&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&page=${page}&with_genres=${genreforURL}`)
        setContent(data.results);
        setNumOfPages(data.total_pages);
    }
    useEffect(() => {
        fetchMovies();
    }, [page, genreforURL

    ])
    return (
        <div>
            <span className="pageTitle">Movies</span>
            <Genres
                setGenre={setGenre}
                setSelectedGenre={setSelectedGenre}
                genre={genre}
                selectedGenre={selectedGenre}
                setPage={setPage}
                mediaType="movie"
            />
            <div className='trending'>
                {
                    content && content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            description={c.overview}
                            title={c.title || c.name}
                            releaseDate={c.release_date || c.first_air_date}
                            mediaType="movie"
                            voteAverage={c.vote_average}

                        />
                    ))
                }
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
        </div>
    )
}

export default Movies
