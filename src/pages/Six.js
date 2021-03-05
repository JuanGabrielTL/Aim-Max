import React from 'react'
import SkillCard from '../components/SkillCard'
import PNG from '../images/sixPNG.png'
import flicking from '../images/flicking.png'
import switching from '../images/switching.png'
import strafe from '../images/strafe.png'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Six = () => {
    return (
        <div className='routine'>

            <Menu />

            <div className='routine-1'>
                <div className='cont-routine-1 wrap-r container'>
                    <img src={PNG} alt='png' />
                    <div className='group'>
                        <h2>RAINBOW SIX <br/> AIM GUIDE</h2>
                        <p>Tom Clancey’s Rainbow 6 Siege is one of the most complex gameplays you’ll find in the top ten fps games. This can mean that new players might not be able to enjoy playing it to the fullest due to not understanding the game firsthand and it’s aiming skill requirements.</p>
                    </div>
                </div>
            </div>

            <div className='routine-2'>
                <div className='cont-routine-2 container'>
                    <div>
                        <h2>GAMEPLAY KEY FEATURES</h2>
                        <p className='pre-title'>The top skills to master at Rainbow 6:</p>
                        <div className='list'>
                            <p>Vertical and Horizontal Sensitivity Settings</p>
                            <p>Crosshair Placement and Tracking</p>
                            <p>Crosshair Selection</p>
                        </div>
                        <p className='pre-title'>Rainbow6 is primarily a tactical shooter game, every round is a lesson for players in tactics, where the consequences of their actions determine the scenario of the next round:</p>
                        <div className='list'>
                            <p>Operatives with unique features and gadgets</p>
                            <p>Thorough knowledge of r6 maps</p>
                            <p>Choosing the right operative for the map conditions</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='routine-3'>
                <div className='cont-routine-3 container'>
                    <h2>MAIN SKILLS REQUIRED AT RAINBOW SIX</h2>
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
                        <p className='pre-title'>Selecting the right sensitivity while playing Rainbow6 aids two important features: Tracking and Recoil Control. The most important aspect of fast-tracking your aim to the highest performance level is finding the right sensitivity settings and sticking with it. That is due to the fact that as you play more, your muscle memory becomes more ingrained in your brain and if you switch your sensitivity after a while all the muscle memory you have built will be gone. Vertical sensitivity settings selection is determined by your r6s recoil patterns, so when you’re firing at a target and your crosshair moves vertically If you notice that you’re overcompensating or not practicing counter-recoil vertically then adjusting your vertical sensitivity should solve this.</p>
                        <div className='columns wrap-r'>
                            <p>Choosing the wrong horizontal sensitivity settings will adversely affect your tracking. Rule of thumb, a higher horizontal sensitivity allows you to quickly snap left or right. However, if you don’t practice counter-recoil horizontally or if you overcompensate to snap back then you must adjust your horizontal sensitivity settings. Headshots are win-shots, they are the quickest and most effective way to eliminate your enemy. An accurate headshot guarantees a quick TTK which is one of the top requirements to dominate in Rainbow 6 Siege.</p>
                            <p>Tracking means moving your crosshair accurately to remain on the target at all times whether one of you or each is moving. To track moving targets it requires a lot of practice and training. Keeping calm while advancing is key to improve your tracking and help keep your aim steady. Mastering your aim requires precision and accuracy, you can choose additional modifiers for the rifles to improve rainbow six siege weapon accuracy. From crosshairs to handles, suppressors, or lasers, choose what would make your weapon more efficient to move.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />


        </div>
    )
}

export default Six