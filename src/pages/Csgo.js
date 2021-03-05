import React from 'react'
import SkillCard from '../components/SkillCard'
import PNG from '../images/csgoPNG.png'
import flicking from '../images/flicking.png'
import switching from '../images/switching.png'
import strafe from '../images/strafe.png'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Csgo = () => {
    return (
        <div className='routine'>

            <Menu />

            <div className='routine-1'>
                <div className='cont-routine-1 wrap-r container'>
                    <img src={PNG} alt='png' />
                    <div className='group'>
                        <h2>CSGO <br/> AIM GUIDE</h2>
                        <p>Counter-Strike Global Offensive or CSGO for short, has been around since 2012 and is the direct successor of Counter Strike 1.6, the mother of all competitive tactical shooter games. While the game is over 8 years old it’s still one of the most played competitive fps games around with 660 thousand players at any given time and a view rate of 86.1 thousand on Twitch alone, only very few games do better than that.</p>
                    </div>
                </div>
            </div>

            <div className='routine-2'>
                <div className='cont-routine-2 container'>
                    <div>
                        <h2>GAMEPLAY KEY FEATURES</h2>
                        <p className='pre-title'>When we zoom-in on the mechanical skill set, the most important points towards individual success:</p>
                        <div className='list'>
                            <p>Reaction speed</p>
                            <p>Crosshair placement</p>
                            <p>Angle peeking</p>
                            <p>Weapon spread and recoil management</p>
                        </div>
                        <p className='pre-title'>The decisive factor when it comes to CSGO aim training is the very low time to kill. This pushes the aim skill-set required for CSGO heavily:</p>
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
                    <h2>MAIN SKILLS REQUIRED AT CSGO</h2>
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
                        <p className='pre-title'>The CSGO gameplay itself is pretty straightforward as both teams: “terrorist” and “counter-terrorists” compete against each other in multiple 5v5 bomb planting rounds, where the terrorists need to plant a bomb on a certain location on the map while the counter-terrorists need to prevent the terrorist from accomplishing their mission. In every round, both teams’ assets and armour are dependent on the team’s performance in the previous round, where they have to accumulate a certain amount of credits to spend on weapons and gear in the upcoming round. Each match exists out of 30 rounds where both teams need to play 15 rounds as terrorist and 15 as counter-terrorist, the team that wins the most matches at the end wins the game. You can find more in depth articles that describe CS GO Gameplay online, including the various modes and gun categories but for now we need to start exploring how to improve aim in CS GO.</p>
                        <div className='columns wrap-r'>
                            <p>For those of you who want to know how to improve aim in CS GO, it is highly recommended to practice at least 15min for flicking and 15min of clicking / target switching every day to see some decent progress. For maximum improvement in CSGO aim training in the shortest amount of time or for players with intermediate aiming skills, train your aim every day. Additionally, for skilled aimers, being well rested is key for breaking their current skill ceiling, as sleep has a major impact on the brain's processing power and human reaction speed.</p>
                            <p>Long training sessions are not the best for anyone. It’s much better to play for a limited time, have a proper rest and then repeat your in-game practice and build your muscle memory. In short, 30 minutes to an hour on a daily basis is far more effective and sustainable than 3 hours once a week. That applies to every level you’re at. This has everything to do with the very fast time to kill (TTK) in CS:GO where every millisecond gained or lost can be the difference between a win or a loss. That is why individual player reaction time has a huge impact at the very top of the competitive ladder.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Csgo