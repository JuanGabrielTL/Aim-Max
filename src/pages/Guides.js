import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import GuidesCard from '../components/GuidesCard'
import back from '../images/back.png'

const Guides = () => {

    const [game, setGame] = useState(['valorant','VALORANT'])

    const handleGame = (e)=>{
        if(e.target.classList.contains('1')){
            setGame(['valorant','VALORANT'])
        }
        if(e.target.classList.contains('2')){
            setGame(['overwatch','OVERWATCH'])
        }
        if(e.target.classList.contains('3')){
            setGame(['apex','APEX'])
        }
        if(e.target.classList.contains('4')){
            setGame(['csgo','CSGO'])
        }
        if(e.target.classList.contains('5')){
            setGame(['fortnite','FORTNITE'])
        }
        if(e.target.classList.contains('6')){
            setGame(['cod','CALL OF DUTY'])
        }
        if(e.target.classList.contains('7')){
            setGame(['six','RAINBOW SIX'])
        }
        
    }

    return (
        <div className={`guides ${game[0]} ${game[2]}`}>

            <div className='cont-guides wrap-r'>

                <div className='go-back'>
                    <Link to='/'><img src={back} alt='back' /></Link>
                </div>
                
                <div className='left-guides'>
                    <p>Select your game</p>

                    <div className='slider-card'>
                        <div onClick={handleGame}>
                            <GuidesCard mini={'valorant'} border='check' num='1' color='on'/>
                        </div>
                        <div onClick={handleGame}>
                            <GuidesCard mini={'overwatch'} border='off' num='2' color='no'/>
                        </div>
                        <div onClick={handleGame}>
                            <GuidesCard mini={'apex'} border='off' num='3' color='no'/>
                        </div>
                        <div onClick={handleGame}>
                            <GuidesCard mini={'csgo'} border='off' num='4' color='no'/>
                        </div>
                        <div onClick={handleGame}>
                            <GuidesCard mini={'fortnite'} border='off' num='5' color='no'/>
                        </div>
                        <div onClick={handleGame}>
                            <GuidesCard mini={'cod'} border='off' num='6' color='no'/>
                        </div>
                        <div onClick={handleGame}>
                            <GuidesCard mini={'six'} border='off' num='7' color='no'/>
                        </div>
                    </div>
                   
                </div>

                

                <div className='right-guides'>
                    <h3><span>GET BETTER</span> <br /> AT {game[1]}</h3>
                    <p>with our tips you will learn <br /> what is necessary to <span>master the game</span></p>
                    <Link to={game[0]}><button>LEARN</button></Link>
                </div>
                
            </div>

            <div className='purple'></div>
            
        </div>
    )
}

export default Guides