import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PopupCard from '../components/PopupCard';
import back from '../images/back.png'
import icon from '../images/iconBig12.png'

let attempt = 0;
let time_now;
let played = false;

const PressKey = () => {
    const [score, setScore] = useState(0)
    const [key, setKey] = useState(['UP','RIGHT','DOWN','LEFT'])

    const handleReady = ()=>{
        document.querySelector('.info-test').classList.add('hide')
        document.querySelector('.group-test').classList.remove('hide')

        let date = new Date()
        time_now = date.getTime()

        name()
    }

    function name() {

        window.addEventListener('keydown',function(e){
            if(!played){
                if(attempt!==10){
                    if(e.which===37){
                        if(document.querySelector('.c').textContent==='LEFT'){
                            setKey(['UP','RIGHT','DOWN','LEFT'])
                            attempt++;
                        }
                    }
                    if(e.which===38){
                        if(document.querySelector('.c').textContent==='UP'){
                            setKey(['UP','RIGHT','DOWN','LEFT'])
                            attempt++;
                        }
                    }
                    if(e.which===39){
                        if(document.querySelector('.c').textContent==='RIGHT'){
                            setKey(['UP','RIGHT','DOWN','LEFT'])
                            attempt++;
                        }
                    }
                    if(e.which===40){
                        if(document.querySelector('.c').textContent==='DOWN'){
                            setKey(['UP','RIGHT','DOWN','LEFT'])
                            attempt++;
                        }
                    }
                }else{
                    let date2 = new Date()
                    let time_later = date2.getTime()
                    let play_time = (time_later-time_now)
                    setScore(play_time)
                    document.querySelector('.after-feed').classList.remove('hide')
                    document.querySelector('.time-text').innerHTML = `${play_time} ms`
            
                    if(play_time<=5160){
                        document.querySelector('.feed-text').innerHTML = 'Approved Test'
                    }else{
                        document.querySelector('.feed-text').innerHTML = 'Test failed. Time must be less than 5160 ms'
                    }
                    played=true;
                }
            }
        })
    }

    const handleRefresh = ()=>{
        window.location.reload();
    }

    const handlePopup = ()=>{
        document.querySelector('.popup').classList.add('on')
        document.querySelector('#overlay').classList.add('on')
    }

    return (
        <div className='test'>

            <div className='info-test wrap-c'>
                <img src={icon} alt='icon' />
                <p>You must press the direction key requested on the screen</p>
                <button onClick={handleReady} className='test-button'>Ready</button>
            </div>

            <div className='group-test two wrap-c hide'>

                <PopupCard game='Press Key' score={score}/>

                <div className='go-back'>
                    <Link to='/exercises'><img src={back} alt='back' /></Link>
                </div>

                <h3 className='c'>{key[Math.floor(Math.random() * key.length)]}</h3>

                <div className='after-feed wrap-c hide'>
                    <h2 className='time-text'>NaN</h2>
                    <p className='feed-text'>NaN</p>
                    <div className='line-bts wrap-r'>
                        <button onClick={handleRefresh}>Try Again</button>
                        <button onClick={handlePopup}>Save Score</button>
                    </div>
                </div>
            </div>

            <div id='overlay'></div>
            
        </div>
    )
}

export default PressKey