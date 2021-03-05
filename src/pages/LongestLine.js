import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PopupCard from '../components/PopupCard';
import back from '../images/back.png'
import icon from '../images/iconBig14.png'

let attempt = 0;
let time_now;
let played = false;

const LongestLine = () => {
    const [score, setScore] = useState(0)
    const [length, setLength] = useState(['s','m','l','xl','xx'])

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
    
    shuffle(length)


    const handleReady = ()=>{
        document.querySelector('.info-test').classList.add('hide')
        document.querySelector('.group-test').classList.remove('hide')

        let date = new Date()
        time_now = date.getTime()

    }

    const handleLine = (e)=>{
        if(!played){
            if(attempt!==4){
                if(e.target.classList.contains('xx')){
                    attempt++;
                    setLength(['s','m','l','xl','xx'])
                }
            }else{
                let date2 = new Date()
                let time_later = date2.getTime()
                let play_time = (time_later-time_now)
                setScore(play_time)
                document.querySelector('.after-feed').classList.remove('hide')
                document.querySelector('.time-text').innerHTML = `${play_time} ms`
                
                if(play_time<=3400){
                    document.querySelector('.feed-text').innerHTML = 'Approved Test'
                }else{
                    document.querySelector('.feed-text').innerHTML = 'Test failed. Time must be less than 3400 ms'
                }
                played=true;
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
                <p>Find and click on the longest line as quickly as possible</p>
                <button onClick={handleReady} className='test-button'>Ready</button>
            </div>

            <div className='group-test two wrap-c hide'>

                <PopupCard game='Longest Line' score={score}/>

                <div className='go-back'>
                    <Link to='/exercises'><img src={back} alt='back' /></Link>
                </div>
                
                <div className='group-line wrap-r'>
                    <hr onClick={handleLine} className={`line ${length[0]}`}/>
                    <hr onClick={handleLine} className={`line ${length[1]}`}/>
                    <hr onClick={handleLine} className={`line ${length[2]}`}/>
                    <hr onClick={handleLine} className={`line ${length[3]}`}/>
                    <hr onClick={handleLine} className={`line ${length[4]}`}/>
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

export default LongestLine
