import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CustomPagination from '../../components/pagination/CustomPagination';
import SingleContent from '../../components/singleContent/SingleContent'
import './Trending.css'
function Trending() {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=5696b1e28a692b39268f9395c6d25e68&page=${page}`)
        setContent(data.results);
    }
    useEffect(() => {
        fetchTrending();
    }, [page])
    return (
        <div>
            <span className="pageTitle">Trending</span>
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
                            mediaType={c.media_type}
                            voteAverage={c.vote_average}

                        />
                    ))
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Trending
