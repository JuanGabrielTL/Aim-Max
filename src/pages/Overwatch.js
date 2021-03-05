import React from 'react'
import SkillCard from '../components/SkillCard'
import PNG from '../images/overwatchPNG.png'
import flicking from '../images/flicking.png'
import switching from '../images/switching.png'
import strafe from '../images/strafe.png'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Overwatch = () => {
    return (
        <div className='routine'>

            <Menu />

            <div className='routine-1'>
                <div className='cont-routine-1 wrap-r container'>
                    <img src={PNG} alt='png' />
                    <div className='group'>
                        <h2>OVERWATCH <br/> AIM GUIDE</h2>
                        <p>In 2016 Blizzard Entertainment released Overwatch, an FPS – MOBA hybrid that shocked the gaming and Esports world. As usual, Blizzard delivered a very solid and polished game with amazing art and story design that let their fans cheer across the entire globe. It shouldn't be a surprise that this highly anticipated title became very popular with over 50 million copies sold.</p>
                    </div>
                </div>
            </div>

            <div className='routine-2'>
                <div className='cont-routine-2 container'>
                    <div>
                        <h2>GAMEPLAY KEY FEATURES</h2>
                        <p className='pre-title'>At first glance, Overwatch may look like a straightforward hero-based, first-person shooter game:</p>
                        <div className='list'>
                            <p>Overwatch is indeed an FPS</p>
                            <p>MOBA hybrid and the MOBA elements are prominent</p>
                            <p>Based gameplay to the wide variety of hero roles and abilities</p>
                            <p>Gravitates heavily towards the use of ultimate abilities</p>
                        </div>
                        <p className='pre-title'>When zooming in on the aiming aspect of the game we immediately notice these things:</p>
                        <div className='list'>
                            <p>The time to kill depending on the heroes</p>
                            <p>In Overwatch each character has a unique weapon</p>
                            <p>Split up the training routine, depending on your hero</p>
                            <p>The aim style is mostly adopted for heroes with high caliber</p>
                            <p>Being highly accurate to make most of your shots count is essential</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='routine-3'>
                <div className='cont-routine-3 container'>
                    <h2>MAIN SKILLS REQUIRED AT OVERWATCH</h2>
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
                        <p className='pre-title'>An important note is that when performing a flick shot you prioritize speed above accuracy. If your time to target is above 200-250 ms it is NOT considered a flick shot. That being said, if you just starting to learn the ropes of flicking, focus on accuracy first and then slightly increase your mouse speed until you reach the thresholds below.</p>
                        <div className='columns wrap-r'>
                            <p>An important part of this Overwatch guide is to focus on your training drills and routine, it’s recommended to dedicate at least 30 minutes for one routine (clicking/flicking or tracking) every day to see noticeable improvement.</p>
                            <p>For maximum results in the shortest amount of time or for players with already decent aiming skills, I recommend training every day for an hour straight. Additionally, for skilled aimers, being well-rested is key for breaking their current skill ceiling most of them face, as sleep has a major impact on the brain's processing power and human reaction speed.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />


        </div>
    )
}

export default Overwatch