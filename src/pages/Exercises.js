import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'
import whiles from '../images/whiless.png'
import Footer from '../components/Footer'
import ExercisesCard from '../components/ExercisesCard'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import icon5 from '../images/icon5.png'
import icon6 from '../images/icon6.png'
import icon7 from '../images/icon7.png'
import icon8 from '../images/icon8.png'
import icon9 from '../images/icon9.png'
import icon10 from '../images/icon10.png'
import icon11 from '../images/icon11.png'
import icon12 from '../images/icon12.png'
import icon13 from '../images/icon13.png'
import icon14 from '../images/icon14.png'
import icon15 from '../images/icon15.png'
import icon16 from '../images/icon16.png'

const Exercises = () => {
    return (
        <div className='exercises'>

            <Menu />

            <div className='exercises-hero'>
                <div className='cont-exercises-hero wrap-r container'>
                    <div className='exercises-left'>
                        <h2>IT’S TIME TO PRACTICE</h2>
                        <p>Logical and cognitive skills are strongly related to individual performance in shooting games, since in these types of games you need a great analytical capacity, speed and reaction. With us you will practice and improve those skills and then be the best in your game.</p>
                    </div>
                    <img src={whiles} alt='xd' />
                </div>
            </div>

            <div className='list-exercises'>
                <div className='cont-list-exercises container'>
                    <h3>List of Exercises:</h3>
                        <div className='group-exercises wrap-r'>

                            <Link to='/exercises/reactionTime'>
                            <ExercisesCard img={icon1} title='Reaction Time' desc='React as soon as possible to the color change'/>
                            </Link>

                            <Link to='/exercises/searchNumber'>
                            <ExercisesCard img={icon2} title='Search Number' desc='According to the representation of the text'/>
                            </Link>

                            <Link to='/exercises/findImpostor'>
                            <ExercisesCard img={icon3} title='Find Impostor' desc='Remove the boxes that do not match the others'/>
                            </Link>

                            <Link to='/exercises/searchColor'>
                            <ExercisesCard img={icon4} title='Search Color' desc='According to the representation of the text'/>
                            </Link>
                            
                            <Link to='/exercises/coloredText'>
                            <ExercisesCard img={icon5} title='Color Text' desc='Reaction when color matching text'/>
                            </Link>

                            <Link to='/exercises/captureColor'>
                            <ExercisesCard img={icon6} title='Capture Color' desc='Capture the green color on the board'/>
                            </Link>
                            
                            <Link to='/exercises/figureChange'>
                            <ExercisesCard img={icon7} title='Shape Change' desc='React to shape change when they are the same'/>
                            </Link>

                            <Link to='/exercises/soundReaction'>
                            <ExercisesCard img={icon8} title='Sound Reaction' desc='React as fast as you can to the sound'/>
                            </Link>

                            <Link to='/exercises/schulteTable'>
                            <ExercisesCard img={icon9} title='Schulte Table' desc='Find the numbers in numerical order'/>
                            </Link>

                            <Link to='/exercises/visualMemory'>
                            <ExercisesCard img={icon10} title='Visual Memory' desc='Memorize and click the orange boxes'/>
                            </Link>

                            <Link to='/exercises/trafficLights'>
                            <ExercisesCard img={icon11} title='Traffic Lights' desc='React when the traffic light is green'/>
                            </Link>

                            <Link to='/exercises/pressKey'>
                            <ExercisesCard img={icon12} title='Press Key' desc='Press the key in the correct direction'/>
                            </Link>

                            <Link to='/exercises/targetShoot'>
                            <ExercisesCard img={icon13} title='Target Shoot' desc='React as soon as possible to the color change'/>
                            </Link>

                            <Link to='/exercises/longestLine'>
                            <ExercisesCard img={icon14} title='Longest Line' desc='Find and click on the longest line'/>
                            </Link>

                            <Link to='/exercises/clickLimit'>
                            <ExercisesCard img={icon15} title='Click Limit' desc='Reach the maximum number of clicks'/>
                            </Link>

                            <Link to='/exercises/typingTest'>
                            <ExercisesCard img={icon16} title='Typing Test' desc='Write a series of words as fast as you can'/>
                            </Link>
                        </div>
                    
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Exercises
