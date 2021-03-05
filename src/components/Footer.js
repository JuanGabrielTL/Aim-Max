import React from 'react'
import git from '../images/git.png'
import twitter from '../images/twitter.png'
import youtube from '../images/youtube.png'
import facebook from '../images/facebook.png'
import logoF from '../images/logoF.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='cont-footer container'>
                
                <h5>&copy; 2021 Juan López</h5>

                <div className='wrap-c'>
                    <img src={logoF} alt='logo' />
                    <div className='footer-services wrap-r'>
                        <h5>Terms of Service</h5>
                        <h5>Privacy Policy</h5>
                        <h5>Security</h5>
                        <h5>Sitemap</h5>
                    </div>
                    <div className='footer-media wrap-r'>
                        <img src={twitter} alt='media' />
                        <img src={facebook} alt='media' />
                        <img src={youtube} alt='media' />
                        <img src={git} alt='media' />
                    </div>
                </div>

                <h5>All rights reserved</h5>
            </div>
        </div>
    )
}

export default Footer
