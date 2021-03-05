import React from 'react'
import SkillCard from '../components/SkillCard'
import PNG from '../images/codPNG.png'
import flicking from '../images/flicking.png'
import switching from '../images/switching.png'
import strafe from '../images/strafe.png'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Cod = () => {
    return (
        <div className='routine'>

            <Menu />

            <div className='routine-1'>
                <div className='cont-routine-1 wrap-r container'>
                    <img src={PNG} alt='png' />
                    <div className='group'>
                        <h2>CALL OF DUTY <br/> AIM GUIDE</h2>
                        <p>This year, however, not only did they release “Call of Duty MW 2019” but also the free-to-play battle royal game “COD Warzone” which is a combination of the popular battle royal genre with the classic Call of Duty run and gun gameplay we are all so familiar with.</p>
                    </div>
                </div>
            </div>

            <div className='routine-2'>
                <div className='cont-routine-2 container'>
                    <div>
                        <h2>GAMEPLAY KEY FEATURES</h2>
                        <p className='pre-title'>The run and gun gameplay of Call of Duty can be positioned between tactical shooters like CS:GO or Rainbow Six Siege and the more classical arena shooters:</p>
                        <div className='list'>
                            <p>it still has some influence on the gameplay, which can’t be said for most arena shooters</p>
                            <p>The time to kill a player walks somewhat the same path, as you take damage from an off-angle</p>
                            <p>Another typical aspect of the Call of Duty MW gameplay is a large number of enemy encounters</p>
                            <p>Aside from aim and gun control, movement is the second key factor to success</p>
                        </div>
                        <p className='pre-title'>With 3D Aim Trainer, you can effectively improve your aim for COD MW by practicing daily on the following training drill. Dedicate a minimum of 30 minutes a day to get visible results:</p>
                        <div className='list'>
                            <p>Bounce Ball Target Switching</p>
                            <p>Eagle’s Nest Horizontal</p>
                            <p>Eagle’s Nest Vertical</p>
                            <p>Combined Flickshots</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='routine-3'>
                <div className='cont-routine-3 container'>
                    <h2>MAIN SKILLS REQUIRED AT CALL OF DUTY</h2>
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
                        <p className='pre-title'>Hearing your enemy as clear as possible is crucial when it comes to your game awareness. In order for you to hear your enemy’s footsteps as clear as possible, boost your audio mix as it really bumps the sounds that matter for locating your enemy and mute’s the rest to the background. Call of Duty MW is a fast-paced action shooter game where hordes of enemies can come from all sides at any moment, this in high contrast to CS:GO for example.</p>
                        <div className='columns wrap-r'>
                            <p>This means that you will have to switch targets frequently and potentially cover some big angles in between. Hence, bumping your mouse sensitivity a notch isn’t a bad idea, especially when this advice is coming from tactical shooters for making sure you don’t run out of mouse pad when fast-switching from one target to another. “Relative” makes for the most natural and balanced feel when switching between low and high magnitude scopes as it uses vertical monitor distance matching to synchronize the mouse sensitivity.</p>
                            <p>You may use 1.33 which makes your crosshair move faster when going ADS (and in sync with targets at the edge of your screen), or 0.00 which makes your mouse moves a bit slower, but more in-line with your hipfire sensitivity the closer you come with your crosshair towards your target which is the setting I always use, alternately you can use the middle ground. You don’t want that the camera movement is linked to the speed at which you move your mouse as this messes with your muscle memory so turn all of this OFF.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Cod