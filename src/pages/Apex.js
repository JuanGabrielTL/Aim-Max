import React from 'react'
import SkillCard from '../components/SkillCard'
import PNG from '../images/apexPNG.png'
import flicking from '../images/flicking.png'
import switching from '../images/switching.png'
import strafe from '../images/strafe.png'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Apex = () => {
    return (
        <div className='routine'>

            <Menu />

            <div className='routine-1'>
                <div className='cont-routine-1 wrap-r container'>
                    <img src={PNG} alt='png' />
                    <div className='group'>
                        <h2>APEX <br/> AIM GUIDE</h2>
                        <p>EA and Respawn Entertainment wanted a piece of the Battle Royale pie by creating the fast-paced hero shooter game Apex Legends. The first triple-A FPS game that combines Battle Royale gameplay with hero specific abilities, distinguishes itself from other Battle Royale games by introducing advanced movement abilities with straight forward gunplay.</p>
                    </div>
                </div>
            </div>

            <div className='routine-2'>
                <div className='cont-routine-2 container'>
                    <div>
                        <h2>GAMEPLAY KEY FEATURES</h2>
                        <p className='pre-title'>High field of view</p>
                        <div className='list'>
                            <p>You see more of the visible world, making objects smaller, keeping and enemies</p>
                            <p>Easier to compensate for recoil as the FOV is higher the weapon is smaller</p>
                            <p>Enemies are smaller and therefore harder to hit</p>
                            <p>Increases the pincushion effect as the object will be a lot bigger</p>
                        </div>
                        <p className='pre-title'>Low field of view</p>
                        <div className='list'>
                            <p>You see less of the visible world, making objects bigger and details</p>
                            <p>Weapon recoil patterns are harder to control</p>
                            <p>Enemies are bigger and easier to hit</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='routine-3'>
                <div className='cont-routine-3 container'>
                    <h2>MAIN SKILLS REQUIRED AT APEX</h2>
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
                        <p className='pre-title'>There is no trick better than practice, practice and practice. Not only does frequent practice trains your muscle memory but it also improves your reaction speed. Train your flicking on both sides to have equal flicks as being left handed, or right handed can shift the balance of your flicking, hence aim accuracy.</p>
                        <div className='columns wrap-r'>
                            <p>To acquire targets as quickly as possible, start practicing on random targets from various angles. Practice your aim slowly first to nail precision then speed will follow. Hand-eye coordination has its own time lag. With Apex Legends quick TTK, it’s important to speed up your hand-eye coordination to the point that you’re not really thinking about shooting, you just aim, shoot and conquer in no time.</p>
                            <p>This tip is very important for improving your aim on PC for Apex Legends, train holding and moving your mouse as swiftly and smoothly as possible for best crosshair placement on moving targets. Practice keeping your crosshair at head height all the time. Instead of running while you’re shooting, practice sprinting, then standing still for a quick second to shoot.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />

        </div>
    )
}

export default Apex