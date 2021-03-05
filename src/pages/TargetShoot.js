import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PopupCard from '../components/PopupCard';
import back from '../images/back.png'
import icon from '../images/iconBig13.png'

const TargetShoot = () => {
    const [score, setScore] = useState(0)
    let attempt = 0;
    let played = false;
    let time_now;

    const handleReady = ()=>{
        document.querySelector('.info-test').classList.add('hide')
        document.querySelector('.group-test').classList.remove('hide')

        let date = new Date()
        time_now = date.getTime()
    }

    const handleShoot = (e)=>{

        let x = Math.floor((Math.random() * 950) + 1);
        let y = Math.floor((Math.random() * 550) + 1);

        if(!played){
            if(attempt!==29){
                e.target.style.transform = `translateX(${x}px) translateY(${y}px)`
            }else{
                let date2 = new Date()
                let time_later = date2.getTime()
                let play_time = (time_later-time_now)
                let sg = Math.round(play_time/1000)
                setScore(play_time)
                document.querySelector('.after-feed').classList.remove('hide')
                document.querySelector('.field').classList.add('hide')
                document.querySelector('.time-text').innerHTML = `${sg} seconds`
                            
                if(play_time<=15000){
                    document.querySelector('.feed-text').innerHTML = 'Approved Test'
                }else{
                    document.querySelector('.feed-text').innerHTML = 'Test failed. Time must be less than 15 seconds'
                }
                played = true;
            }
    
            attempt++;
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
                <p>Click on the frame as fast you can when it changes color</p>
                <button onClick={handleReady} className='test-button'>Ready</button>
            </div>

            <div className='group-test two wrap-c hide'>

                <PopupCard game='Target Shoot' score={score}/>

                <div className='go-back'>
                    <Link to='/exercises'><img src={back} alt='back' /></Link>
                </div>

                <div className='field'>
                    <div onClick={handleShoot} className='target'></div>
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

export default TargetShoot
