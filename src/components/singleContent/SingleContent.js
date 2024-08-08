import React from 'react'
import './singleContent.css'
import { img_300, unavailable } from '../config/config'
import { Badge } from '@mui/material';
import ContentModal from './ContentModal';
function singleContent({
    id,
    title,
    mediaType,
    voteAverage,
    releaseDate,
    description,
    poster
}) {
    return (
        <ContentModal mediaType={mediaType} id={id}>
            <Badge badgeContent={voteAverage} color={voteAverage > 6 ? 'primary' : 'secondary'} />
            <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className='title'>{title}</b>
            <span className='subtitle'>
                {mediaType === "tv" ? "TV Series" : "Movie"}
                <span className='releaseDate'>{releaseDate}</span>
            </span>
        </ContentModal>
    )
}

export default singleContent
