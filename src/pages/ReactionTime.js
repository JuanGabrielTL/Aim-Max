import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PopupCard from '../components/PopupCard';
import back from '../images/back.png'
import icon from '../images/iconBig1.png'

const ReactionTime = () => {
    const [score, setScore] = useState(0)
    const handleReady = ()=>{
        document.querySelector('.info-test').classList.add('hide')
        document.querySelector('.group-test').classList.remove('hide')

        name()
    }

    function name(params) {
        const second = Math.floor((Math.random() * 5000) + 1000);

        setTimeout(() => {
            document.querySelector('.group-test').classList.add('on')
            
            let date = new Date()
            let time_now = date.getTime()

            document.querySelector('.group-test').addEventListener('click',()=>{
                let date2 = new Date()
                let time_later = date2.getTime()
                let play_time = (time_later-time_now)
                setScore(play_time)
                document.querySelector('.after-feed').classList.remove('hide')
                document.querySelector('.time-text').innerHTML = `${play_time} ms`
                if(play_time<=380){
                    document.querySelector('.feed-text').innerHTML = 'Approved Test'
                }else{
                    document.querySelector('.feed-text').innerHTML = 'Test failed. Time must be less than 380 ms'
                }
            }, {once : true})
            
        }, second);
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

            <div className='group-test wrap-c hide'>

                <PopupCard game='Reaction Time' score={score}/>

                <div className='go-back'>
                    <Link to='/exercises'><img src={back} alt='back' /></Link>
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

export default ReactionTime
