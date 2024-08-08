import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { img_500, unavailable, unavailableLandscape } from "../config/config"
import Carousel from "../carousel/Carousel"
import './ContentModal.css'


export default function ContentModal({ children, mediaType, id }) {
    const [open, setOpen] = React.useState(false);
    const [content, setContent] = useState();
    const [video, setVideo] = useState();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchData = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=5696b1e28a692b39268f9395c6d25e68&language=en-US`)
        setContent(data);
    }

    const fetchVideo = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=5696b1e28a692b39268f9395c6d25e68&language=en-US`)
        setVideo(data.results[0]?.key);
    }

    useEffect(() => {
        fetchData();
        fetchVideo();
    }, [mediaType, id])
    return (
        <>
            <div onClick={handleOpen} className="singleContent">{children}</div>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box style={{ background: "black" }}>
                        {content && (
                            <div className="ContentModal">
                                <img
                                    className="ContentPortrait"
                                    alt={content.name || content.title}
                                    src={content.poster_path
                                        ? `${img_500}/${content.poster_path}`
                                        : unavailable}
                                />
                                <img
                                    className="ContentPortraitLandscape"
                                    alt={content.name || content.title}
                                    src={content.backdrop_path
                                        ? `${img_500}/${content.backdrop_path}`
                                        : unavailableLandscape}
                                />

                                <div className='ContentModalAbout'>
                                    <span className="ContentModalTitle" variant="h4" component="h6">
                                        {content.name || content.title}(
                                        {(content.release_date || content.first_air_date || "----").substring(0, 4)}
                                        )
                                    </span>
                                    {content.tagline && (<i className="tagline">{content.tagline}</i>)}
                                    <span className="ContentModalDescription">{content.overview}</span>
                                    <div>
                                        <Carousel mediaType={mediaType} id={id} />
                                    </div>
                                    {video &&
                                        (<Button
                                            variant="contained"
                                            startIcon={<YouTubeIcon />}
                                            color="secondary"
                                            target="_blank"
                                            href={`https://www.youtube.com/watch?v=${video}`}
                                        >
                                            Watch the Trailer
                                        </Button>
                                        )}
                                </div>
                            </div>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
