import React from 'react'
import './Header.css'
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import { Link } from 'react-router-dom';
function header() {
    return (
        <div className='header'>
            <span className='icon'><button type='button' className='headerIcon' onClick={() => { window.scroll(0, 0) }}>IMDb</button></span>
            <div className='userCredentials'>
                <Link to='/login'>
                    <span className='headerLogin'>Login</span>
                </Link>
                <Link to='/watchlist'>
                    <span className='headerWatchList'><AddToQueueIcon className='watchListIcon' />WatchList</span>
                </Link>
            </div>
        </div>
    )
}

export default header
