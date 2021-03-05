import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PopupCard from '../components/PopupCard';
import back from '../images/back.png'
import icon from '../images/iconBig15.png'

const ClickLimit = () => {
    const [score, setScore] = useState(0)
    let played = false;

    let click = 0;
    let time = 11;
    let t=0

    const handleReady = ()=>{
        document.querySelector('.info-test').classList.add('hide')
        document.querySelector('.group-test').classList.remove('hide')

        name()
    }

    function name(params) {

        document.querySelector('.group-test').addEventListener('click',()=>{
            if(!played){
                click++;
                document.querySelector('.x').innerHTML = click;
            }
                
        })
    
        while (t < 11) {
            (function(t) {
                setTimeout(function() {
                time--;
                document.querySelector('.y').innerHTML = time;
                if(time===0){
                    document.querySelector('.after-feed').classList.remove('hide')
                        
                    if(click>=65){
                        document.querySelector('.feed-text').innerHTML = 'Approved Test'
                    }else{
                        document.querySelector('.feed-text').innerHTML = 'Test failed. Clicks must be higher than 65'
                    }
                    setScore(click)
                    played=true;
                }
                }, 1000 * t)
            })(t++)
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
                <p>Click on the screen as many times as you can in 10 seconds</p>
                <button onClick={handleReady} className='test-button'>Ready</button>
            </div>

            <div className='group-test two wrap-c hide'>

                <PopupCard game='Click Limit' score={score}/>

                <div className='go-back'>
                    <Link to='/exercises'><img src={back} alt='back' /></Link>
                </div>

                <div className='wrap-r'>

                    <div className='group-time wrap-c'>
                        <h4>Click</h4>
                        <h3 className='x'>{click}</h3>
                    </div>

                    <div className='group-time wrap-c'>
                        <h4>Time</h4>
                        <h3 className='y'>{time}</h3>
                    </div>

                </div>

                <div className='after-feed wrap-c hide'>
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

export default ClickLimit
