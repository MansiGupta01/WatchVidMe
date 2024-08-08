import axios from 'axios'
import React, { useEffect } from 'react'
import Chip from '@mui/material/Chip';
function Genres({
    setGenre,
    setSelectedGenre,
    genre,
    selectedGenre,
    setPage,
    mediaType
}) {

    const handleAdd = (g) => {
        setSelectedGenre([...selectedGenre, g]);
        setGenre(genre.filter((genres) => genres.id !== g.id));
    };

    const handleRemove = (g) => {
        setSelectedGenre(selectedGenre.filter((genres) => genres.id !== g.id));
        setGenre([...genre, g]);
    };


    const fetchGenre = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=5696b1e28a692b39268f9395c6d25e68&language=en-US`)
        setGenre(data.genres);
    };

    useEffect(() => {
        fetchGenre();

        return () => {
            setGenre([]);
        }
    }, [])

    return (
        <div style={{ padding: 10 }}>
            {selectedGenre && selectedGenre.map((g) => (
                <Chip
                    key={g.id}
                    label={g.name}
                    style={{ margin: '3px', background: "#3f51b5", color: "#fff" }}
                    size='small'
                    clickable
                    onDelete={() => handleRemove(g)}
                />
            ))}
            {genre && genre.map((g) => (
                <Chip
                    key={g.id}
                    label={g.name}
                    style={{ margin: '3px', background: "#f0f0f0" }}
                    size='small'
                    clickable
                    onClick={() => handleAdd(g)}
                />
            ))}
        </div>
    )
}

export default Genres
