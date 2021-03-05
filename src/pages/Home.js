import React,{useState} from 'react'
import hero from '../images/hero.png'
import game1 from '../images/game1.png'
import game2 from '../images/game2.png'
import game3 from '../images/game3.png'
import game4 from '../images/game4.png'
import game5 from '../images/game5.png'
import game6 from '../images/game6.png'
import game7 from '../images/game7.png'
import abilities from '../images/abilities.png'
import abilities2 from '../images/abilities2.png'
import abilities3 from '../images/abilities3.png'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import KindCard from '../components/KindCard'

const Home = () => {

    const [image, setImage] = useState(abilities)

    const handleHandleA = (e)=>{
        let g = document.querySelectorAll('.kind-card')
        
        g.forEach(element => {
            element.classList.remove('on')
        });

        if(e.target.classList.contains('i')){
            e.target.parentElement.parentElement.classList.add('on')
        }
        if(e.target.classList.contains('t')){
            e.target.parentElement.parentElement.classList.add('on')
        }
        if(e.target.classList.contains('kind-card')){
            e.target.classList.add('on')
        }
        setImage(abilities)
    }

    const handleHandleB = (e)=>{
        let g = document.querySelectorAll('.kind-card')

        g.forEach(element => {
            element.classList.remove('on')
        });

        if(e.target.classList.contains('i')){
            e.target.parentElement.parentElement.classList.add('on')
        }
        if(e.target.classList.contains('t')){
            e.target.parentElement.parentElement.classList.add('on')
        }
        if(e.target.classList.contains('kind-card')){
            e.target.classList.add('on')
        }
        setImage(abilities2)
    }

    const handleHandleC = (e)=>{
        let g = document.querySelectorAll('.kind-card')

        g.forEach(element => {
            element.classList.remove('on')
        });

        if(e.target.classList.contains('i')){
            e.target.parentElement.parentElement.classList.add('on')
        }
        if(e.target.classList.contains('t')){
            e.target.parentElement.parentElement.classList.add('on')
        }
        if(e.target.classList.contains('kind-card')){
            e.target.classList.add('on')
        }
        setImage(abilities3)
    }

    

    return (
        <div className='ñao'>
            <Menu />

            <main className='hero'>
                <div className='cont-hero wrap-r container'>
                    <div>
                        <h1>TRAIN YOUR SHOOTING SKILLS</h1>
                        <p>Master your aim in videogames through brain games and cognitive tests</p>
                        <button>LET’S START</button>
                    </div>
                    <img src={hero} alt='hero' />
                </div>
            </main>

            <div className='games'>
                <div className='cont-games wrap-r container'>
                    <img src={game1} alt='valorant' />
                    <hr />
                    <img src={game2} alt='valorant' />
                    <hr />
                    <img src={game3} alt='valorant' />
                    <hr />
                    <img src={game4} alt='valorant' />
                    <hr />
                    <img src={game5} alt='valorant' />
                    <hr />
                    <img src={game6} alt='valorant' />
                    <hr />
                    <img src={game7} alt='valorant' />
                </div>
            </div>

            <div className='summary'>
                <div className='cont-summary container'>
                    <div className='summary-left'>
                        <h3>16 DIFFERENT EXERCISES</h3>
                        <p>We have 16 different exercises by which you can exercise 3 important parts of the brain</p>
                        
                        <div onClick={handleHandleA} className='egg'>
                            <KindCard icon='brain' title='Analytical' desc='Brain exercises' css='on' />
                        </div>

                        <div onClick={handleHandleB} className='egg'>
                            <KindCard icon='eye' title='Reaction' desc='Improve your reaction' css='off'/>
                        </div>

                        <div onClick={handleHandleC} className='egg'>
                            <KindCard icon='speed' title='Speed' desc='You will be faster' css='off'/>
                        </div>
                    </div>
                    <img src={image} alt='abilities' />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home
