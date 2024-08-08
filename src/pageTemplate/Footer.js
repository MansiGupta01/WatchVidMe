import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
    return (
        <div className='pageFooter'>
            <div className='footerContent'>
                <div className='about'>
                    <span style={{ marginLeft: '50px' }}><button type='button' className='footerIcon'>IMDb</button></span>
                    <p className='madeByText'>Made by: <span className='madeByTextBold'>Mansi Gupta </span></p>
                </div>
                <hr className='verticalLine' />
                <div className='footerHelp'>
                    <p className='contactUs'><a href='' target='_blank'>Contact Us</a></p>
                    <p className='terms'><a href='' target='_blank'>Terms & conditions</a></p>
                    <p className='privacy'><a href='' target='_blank'>Privacy Policies</a></p>
                </div>
            </div>
            <div className='social'>
                <a href='https://www.instagram.com/' target='_blank'><InstagramIcon /></a>
                <a href='https://github.com/MansiGupta01' target='_blank'><GitHubIcon /></a>
                <a href='https://www.linkedin.com/in/mansi-gupta-6049741b5/' target='_blank'><LinkedInIcon /></a>
            </div>
        </div>
    )
}

export default Footer
