import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PopupCard from '../components/PopupCard';
import back from '../images/back.png'
import icon from '../images/iconBig3.png'

const FindImpostor = () => {
    const [score, setScore] = useState(0)
    let role = ['true','true','false','false','false','false','false','false','false','false','false','false','false','false','false','false']

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
    
    shuffle(role)

    let attempt = 0;
    let played = false;
    let time_now;

    const handleReady = ()=>{
        document.querySelector('.info-test').classList.add('hide')
        document.querySelector('.group-test').classList.remove('hide')

        let date = new Date()
        time_now = date.getTime()
    }
    
    const handleImpostor = (e)=>{
        
        if(!played){
            if(e.target.classList.contains('true')){
                attempt++
                e.target.classList.remove('true')
                e.target.classList.add('find')
            }
        
            if(attempt===2){
                let date2 = new Date()
                let time_later = date2.getTime()
                let play_time = (time_later-time_now)
                setScore(play_time)
                document.querySelector('.after-feed').classList.remove('hide')
                document.querySelector('.time-text').innerHTML = `${play_time} ms`
                if(play_time<=2300){
                    document.querySelector('.feed-text').innerHTML = 'Approved Test'
                }else{
                    document.querySelector('.feed-text').innerHTML = 'Test failed. Time must be less than 2300 ms'
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
                <p>Find the two down arrows and remove them as quickly as possible</p>
                <button onClick={handleReady} className='test-button'>Ready</button>
            </div>

            <div className='group-test two wrap-c hide'>

                <PopupCard game='Find Impostor' score={score}/>

                <div className='go-back'>
                    <Link to='/exercises'><img src={back} alt='back' /></Link>
                </div>

                <div className='group-impostor wrap-c'>
                    <div className='wrap-r'>
                        <div onClick={handleImpostor} className={`box-impostor ${role[0]}`}></div>
                        <div onClick={handleImpostor} className={`box-impostor ${role[1]}`}></div>
                        <div onClick={handleImpostor} className={`box-impostor ${role[2]}`}></div>
                        <div onClick={handleImpostor} className={`box-impostor ${role[3]}`}></div>
                    </div>
                    <div className='wrap-r'>
                        <div onClick={handleImpostor} className={`box-impostor ${role[4]}`}></div>
                        <div onClick={handleImpostor} className={`box-impostor ${role[5]}`}></div>
                        <div onClick={handleImpostor} className={`box-impostor ${role[6]}`}></div>
                        <div onClick={handleImpostor} className={`box-impostor ${role[7]}`}></div>
                    </div>
                    <div className='wrap-r'>
                        <div onClick={handleImpostor} className={`box-impostor ${role[8]}`}></div>
                        <div onClick={handleImpostor} className={`box-impostor ${role[9]}`}></div>
                        <div onClick={handleImpostor} className={`box-impostor ${role[10]}`}></div>
                        <div onClick={handleImpostor} className={`box-impostor ${role[11]}`}></div>
                    </div>
                    <div className='wrap-r'>
                        <div onClick={handleImpostor} className={`box-impostor ${role[12]}`}></div>
                        <div onClick={handleImpostor} className={`box-impostor ${role[13]}`}></div>
                        <div onClick={handleImpostor} className={`box-impostor ${role[14]}`}></div>
                        <div onClick={handleImpostor} className={`box-impostor ${role[15]}`}></div>
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

export default FindImpostor
