import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'

const Menu = () => {
    return (
        <div className='menu'>
            <div className='cont-menu wrap-r'>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='menu-links wrap-r'>
                    <Link to='/exercises'><p>Exercises</p></Link>
                    <Link to='/leaderboard'><p>Leaderboard</p></Link>
                    <Link to='/skills'><p>Skills</p></Link>
                    <Link to='/guides'><p>Guides</p></Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Menu
