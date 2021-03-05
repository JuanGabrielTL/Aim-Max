import React from 'react'
import SkillCard from '../components/SkillCard'
import PNG from '../images/valorantPNG.png'
import flicking from '../images/flicking.png'
import switching from '../images/switching.png'
import strafe from '../images/strafe.png'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Valorant = () => {
    return (
        <div className='routine'>

            <Menu />

            <div className='routine-1'>
                <div className='cont-routine-1 wrap-r container'>
                    <img src={PNG} alt='png' />
                    <div className='group'>
                        <h2>VALORANT <br/> AIM GUIDE</h2>
                        <p>To be able to improve your aim at Valorant, you first need to understand its DNA. The new free to play tactical FPS game is the brainchild of Riot Games. But what is the core essence of Valorant? The tactical multiplayer hero-based first-person shooter game is a merge between Counter-Strike (70%) and Overwatch (30%). Basically, if both aforementioned games were to unite in holy matrimony, Valorant would be their child.</p>
                    </div>
                </div>
            </div>

            <div className='routine-2'>
                <div className='cont-routine-2 container'>
                    <div>
                        <h2>GAMEPLAY KEY FEATURES</h2>
                        <p className='pre-title'>To start this Valorant aim trainer guide, the gameplay itself leans heavily towards Counter-Strike with the following features:</p>
                        <div className='list'>
                            <p>Multiple 5v5 bomb planting rounds</p>
                            <p>Credit-based weapon economy</p>
                            <p>Similar to CS:GO linear map layout</p>
                            <p>Very low TTK</p>
                        </div>
                        <p className='pre-title'>The most required skills for success at playing Valorant are:</p>
                        <div className='list'>
                            <p>High reaction speed</p>
                            <p>Accuracy in crosshair placement and flicks</p>
                            <p>Recoil management and weapon spread</p>
                            <p>Mastering corner and angle peeking</p>
                            <p>Thorough map knowledge</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='routine-3'>
                <div className='cont-routine-3 container'>
                    <h2>MAIN SKILLS REQUIRED AT VALORANT</h2>
                    <div className='line-routine wrap-r'>
                        <SkillCard name='Flicking' img={flicking} num='1' check='off'/>
                        <SkillCard name='Switching' img={switching} num='3' check='off'/>
                        <SkillCard name='Strafe' img={strafe} num='4' check='off'/>
                    </div>
                    <p>To master the game you must concentrate on mastering these skills</p>
                </div>
            </div>

            <div className='routine-4'>
                <div className='cont-routine-4 container'>
                    <div>
                        <h2>GAMEPLAY KEY FEATURES</h2>
                        <p className='pre-title'>The aim skill-set required to become a top Valorant aim trainer leans heavily towards high reaction speed, small accurate flick shots, weapon spread, and recoil management. Boost your skills in those attributes and you’ll move up in ranks. To explain mastering your aiming skills at Valorant in more details:</p>
                        <div className='columns wrap-r'>
                            <p>As you are advancing throughout the map, always be aware of your crosshair placement by keeping it at head height and take corners by slightly adjusting your crosshair towards the edge of the corner while you approach it. No matter your reflexes, solid crosshair placement gives you the best shot on taking down your target in a split second the moment you have contact.</p>
                            <p>As mentioned before, Valorant overall has a linear map layout with some area’s that have multiple angles, to avoid being killed, do not spread your aiming and peeking across different angles at the same time, use abilities such as smoke or viper’s poison cloud to block one angle while you take care of another and systematically work your way one angle at a time.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Valorant