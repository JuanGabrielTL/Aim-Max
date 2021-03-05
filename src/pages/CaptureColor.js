import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PopupCard from '../components/PopupCard';
import back from '../images/back.png'
import icon from '../images/iconBig6.png'

let attempt = 0;
let played = false;
let time_now;

const CaptureColor = () => {
    const [score, setScore] = useState(0)
    const random = ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE']

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    shuffle(random)

    const handleReady = ()=>{
        document.querySelector('.info-test').classList.add('hide')
        document.querySelector('.group-test').classList.remove('hide')

        let date = new Date()
        time_now = date.getTime()

        name()
    }

    function name(params) {

        if(!played){

            if(attempt!==9){
                let boxes = document.querySelectorAll('.capture')

                boxes.forEach(element => {
                    element.classList.remove('on')
                });
                
                document.querySelector(`.capture.${random[attempt]}`).classList.add('on')
    
                document.querySelector('.capture.on').addEventListener('click',()=>{
                    attempt++;
                    name()
                })
            }else{
                let date2 = new Date()
                let time_later = date2.getTime()
                let play_time = (time_later-time_now)
                setScore(play_time)
                document.querySelector('.after-feed').classList.remove('hide')
                document.querySelector('.time-text').innerHTML = `${play_time} ms`
                        
                if(play_time<=4230){
                    document.querySelector('.feed-text').innerHTML = 'Approved Test'
                }else{
                    document.querySelector('.feed-text').innerHTML = 'Test failed. Time must be less than 4230 ms'
                }

                played = true;
            }
        }
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
                <p>Click on the green color when it appears as fast as you can</p>
                <button onClick={handleReady} className='test-button'>Ready</button>
            </div>

            <div className='group-test two wrap-c hide'>

                <PopupCard game='Capture Color' score={score}/>

                <div className='go-back'>
                    <Link to='/exercises'><img src={back} alt='back' /></Link>
                </div>

                <div className='wrap-r'>
                    <div className='capture ONE'></div>
                    <div className='capture TWO'></div>
                    <div className='capture THREE'></div>
                </div>
                <div className='wrap-r'>
                    <div className='capture FOUR'></div>
                    <div className='capture FIVE'></div>
                    <div className='capture SIX'></div>
                </div>
                <div className='wrap-r'>
                    <div className='capture SEVEN'></div>
                    <div className='capture EIGHT'></div>
                    <div className='capture NINE'></div>
                </div>

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

export default CaptureColor