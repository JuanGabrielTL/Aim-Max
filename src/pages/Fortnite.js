import React from 'react'
import SkillCard from '../components/SkillCard'
import PNG from '../images/fortnitePNG.png'
import flicking from '../images/flicking.png'
import switching from '../images/switching.png'
import strafe from '../images/strafe.png'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Fortnite = () => {
    return (
        <div className='routine'>

            <Menu />

            <div className='routine-1'>
                <div className='cont-routine-1 wrap-r container'>
                    <img src={PNG} alt='png' />
                    <div className='group'>
                        <h2>FORTNITE <br/> AIM GUIDE</h2>
                        <p>The 25th of July 2017 is marked as one of the most memorable days in gaming history as publisher Epic Games released their Behemoth “Fortnite” upon this world. A free-to-play Third-Person Battle Royale that surprised friend and foe with its fresh visual style and groundbreaking gameplay elements. All wrapped up in a cool cartoony, almost Pixar-like design targeted towards GEN Z youngsters. And as we all know, Epic Games struck gold with Fortnite as it became a global hit with unprecedented success in recent history.</p>
                    </div>
                </div>
            </div>

            <div className='routine-2'>
                <div className='cont-routine-2 container'>
                    <div>
                        <h2>GAMEPLAY KEY FEATURES</h2>
                        <p className='pre-title'>The most required skills for Fortnite victory are:</p>
                        <div className='list'>
                            <p>High Accuracy</p>
                            <p>Crosshair placement</p>
                            <p>Learning to shoot from various stances like crouch and jump shooting</p>
                            <p>Selecting the right weapons and utilizing weapon combos</p>
                            <p>Using the edits in build battles to cause the most amount of damage</p>
                        </div>
                        <p className='pre-title'>You should be able to notice improvement and move one level up in your aiming skill within 2 weeks of regular training. The idea of training regularly is to build your muscle memory and improve your reaction time:</p>
                        <div className='list'>
                            <p>Micro flick shots</p>
                            <p>Macro flick shots</p>
                            <p>Bounce ball click timing</p>
                            <p>Bounce ball target switching</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='routine-3'>
                <div className='cont-routine-3 container'>
                    <h2>MAIN SKILLS REQUIRED AT FORTNITE</h2>
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
                        <p className='pre-title'>When you’re not shooting, jump around and act like a moving target, that makes it hard for your enemies to land a shot. When you want to start shooting, you will need to steady yourself to guarantee accuracy. When using a rifle or any other medium-range weapon crouch while shooting for optimal aim. In Fortnite combat, your crosshair changes according to your movement. Jumping makes the crosshair larger and more difficult to accurately shoot your enemy, standing still while aiming will shrink your crosshair considerably. Understanding Bloom as a mechanic is really important in Fortnite.</p>
                        <div className='columns wrap-r'>
                            <p>Aim for the center of your enemy rather than his head, especially when they are further away from you, this guarantees a body hit since there’s a slimmer chance of getting the multiplied damage of a headshot. Aim for the center of your enemy rather than his head, especially when they are further away from you, this guarantees a body hit since there’s a slimmer chance of getting the multiplied damage of a headshot.</p>
                            <p>Practice your aim while ingame and not in combat, this can be achieved by placing your crosshair at any nonmoving object you come across and steadying your aim at it from different angles. Target practice on moving objects as well to keep your muscle memory sharp. Practice how to snipe, mastering the bullet drop is crucial to becoming a Pro in Fortnite. Aiming at the head of a stationary target from a short distance should do the trick.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Fortnite