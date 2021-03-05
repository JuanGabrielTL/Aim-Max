import React,{useState} from 'react'
import SkillCard from '../components/SkillCard'
import flicking from '../images/flicking.png'
import tracking from '../images/tracking.png'
import switching from '../images/switching.png'
import strafe from '../images/strafe.png'
import divider from '../images/divider.png'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Skills = () => {

    const [explain, setExplain] = useState(['FLICKING EXAMPLE','Learn how to master crosshair placement accuracy and speed. It takes a lot of practice to be able to place your crosshair as fast and precise as possible on your target’s head by swiping your mouse in a quick yet controlled movement.','https://www.youtube.com/embed/WPSC1a8xtfk'])

    const handleOne = (e)=>{

        if(e.target.classList.contains('1')){
            setExplain(['FLICKING EXAMPLE','Learn how to master crosshair placement accuracy and speed. It takes a lot of practice to be able to place your crosshair as fast and precise as possible on your target’s head by swiping your mouse in a quick yet controlled movement.','https://www.youtube.com/embed/WPSC1a8xtfk'])
        }
        if(e.target.classList.contains('2')){
            setExplain(['TRACKING EXAMPLE','Practice following your target with accurate crosshair placement and anticipate as fast as possible any change in your target’s movement to deal as much damage in the shortest amount of time possible.','https://www.youtube.com/embed/5sA6VgvUFMA'])
        }
        if(e.target.classList.contains('3')){
            setExplain(['SWITCHING EXAMPLE','The Academy Aim test routines include practicing to switch your crosshair between 2 targets swiftly and with mouse accuracy to neutralize multiple targets in the least amount of time.','https://www.youtube.com/embed/XI5Oevaczbo'])
        }
        if(e.target.classList.contains('4')){
            setExplain(['STRAFE EXAMPLE','Strafe aim is to change movement directions whenever and only whenever the opponent you are aiming at is changing direction. Keep in mind that you have 8 possible directions.','https://www.youtube.com/embed/1Q3gxNGhEag'])
        }

        const allSkills = document.querySelectorAll('.skill-card')

        allSkills.forEach(element => {
            element.classList.remove('on')
            e.target.classList.add('on')
        });

        if(e.target.classList.contains('t')){
            e.target.parentElement.classList.add('on')
        }
        if(e.target.classList.contains('i')){
            e.target.parentElement.classList.add('on')
        }
    }

    return (
        <div className='skills'>

            <Menu />

            <div className='cont-skills container'>
                <h2>4 <span>AIMING SKILLS</span> TO MASTER</h2>

                <div className='box-skills wrap-r'>
                    <div onClick={handleOne}>
                        <SkillCard name='Flicking' img={flicking} num='1' check='on'/>
                    </div>
                    <div onClick={handleOne}>
                        <SkillCard name='Tracking' img={tracking} num='2' check='off'/>
                    </div>
                    <div onClick={handleOne}>
                        <SkillCard name='Switching' img={switching} num='3' check='off'/>
                    </div>
                    <div onClick={handleOne}>
                        <SkillCard name='Strafe' img={strafe} num='4' check='off'/>
                    </div>
                </div>

                <div className='info-skills'>
                    <h3>{explain[0]}</h3>
                    <p>{explain[1]}</p>
                    
                    <iframe title='noGeneral' src={explain[2]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    
                </div>

                <img className='divider' src={divider} alt='divider' />

                <div className='video-general'>
                    <h3>GENERAL <span>VIDEO</span> EXPLAIN</h3>
                    <iframe title='noGeneral' src="https://www.youtube.com/embed/nYcPR2aNeRM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>

            <Footer />
            
        </div>
    )
}

export default Skills