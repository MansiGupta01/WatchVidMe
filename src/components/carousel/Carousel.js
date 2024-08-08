import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, noPicture } from '../config/config';
import './Carousel.css'
const handleDragStart = (e) => e.preventDefault();


const Carousel = ({ mediaType, id }) => {
    const [credits, setCredits] = useState([]);

    const fetchCredit = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=5696b1e28a692b39268f9395c6d25e68&language=en-US`);
        setCredits(data.cast)
    }
    useEffect(() => {
        fetchCredit();
    }, [mediaType, id]);

    const responsive = {
        0:
            { items: 2 },
        568:
            { items: 3 },
        1024:
            { items: 5 }
    }
    const items = credits.map((credit) => (
        <div className="carouselItem">
            <img src={credit.profile_path ? `${img_300}/${credit.profile_path}` : noPicture}
                alt={credit.name}
                onDragStart={handleDragStart}
                className="carouselItemImage"
            />
            <b>{credit.name}</b>
        </div>
    ));
    return (
        <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            infinite
            responsive={responsive}
            disableButtonsControls
            disableDotsControls

        />
    )
}
export default Carousel;