import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PopupCard from '../components/PopupCard';
import back from '../images/back.png'
import icon from '../images/iconBig11.png'

const TrafficLights = () => {
    const [score, setScore] = useState(0)
    const handleReady = ()=>{
        document.querySelector('.info-test').classList.add('hide')
        document.querySelector('.group-test').classList.remove('hide')

        name()
    }

    let x=0;
    let time_now;
    let time = [1000,1000,Math.floor((Math.random() * 6000) + 2000)]

    function name(params) {
        let lightRedAll = document.querySelectorAll('.light-red')

        setTimeout(() => {
            if(x!==4){
                lightRedAll[x].classList.add('ready')
                name()
            }else{
                let lightGreenAll = document.querySelectorAll('.light-green')
                lightGreenAll.forEach(element => {
                    element.classList.add('ready')
                });

                let date = new Date()
                time_now = date.getTime()

                document.querySelector('.group-test').addEventListener('click',()=>{
                    let date2 = new Date()
                    let time_later = date2.getTime()
                    let play_time = (time_later-time_now)
                    setScore(play_time)
                    document.querySelector('.after-feed').classList.remove('hide')
                    document.querySelector('.time-text').innerHTML = `${play_time} ms`
                    if(play_time<=290){
                        document.querySelector('.feed-text').innerHTML = 'Approved Test'
                    }else{
                        document.querySelector('.feed-text').innerHTML = 'Test failed. Time must be less than 290 ms'
                    }
                }, {once : true})
            }
            x++;
        }, time[x]); 
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
                <p>Click as fast as the red lights turn off and the green lights turn on</p>
                <button onClick={handleReady} className='test-button'>Ready</button>
            </div>

            <div className='group-test two wrap-c hide'>

                <PopupCard game='Traffic Lights' score={score}/>

                <div className='go-back'>
                    <Link to='/exercises'><img src={back} alt='back' /></Link>
                </div>

                <div className='group-light'>
                    <div className='wrap-r'>
                        <div className='light-red'></div>
                        <div className='light-red'></div>
                        <div className='light-red'></div>
                        <div className='light-red'></div>
                    </div>
                    <div className='wrap-r'>
                        <div className='light-green'></div>
                        <div className='light-green'></div>
                        <div className='light-green'></div>
                        <div className='light-green'></div>
                    </div>
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

export default TrafficLights
