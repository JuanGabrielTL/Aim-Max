import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PopupCard from '../components/PopupCard';
import back from '../images/back.png'
import icon from '../images/iconBig16.png'

const TypingTest = () => {
    const [score, setScore] = useState(0)
    let lyric = 'Sometimes I lay under the moon and thank God I am breathing then I pray do not take me soon because I am here for a reason sometimes in my tears I drown but I never let it get me down so when negativity surrounds I know some day it will all turn around because. All my life I have been waiting for I have been praying for the people to say that we do not wanna fight no more there will be no more war and our children will play'

    let played = false;
    let time_now;
    let attempt=0;
    let key=0;
    let correct=0;
    let words = lyric.split(' ')
    
    const handleReady = ()=>{
        document.querySelector('.info-test').classList.add('hide')
        document.querySelector('.group-test').classList.remove('hide')

        let date = new Date()
        time_now = date.getTime()
        
        name()
    }

    function name(params) {

        let ps = document.querySelectorAll('.group-lyric p')

        if(!played){
            
            ps[attempt].classList.add('focus')

            document.getElementById('l-text').addEventListener('keyup',function(e){
                if(e.which===32){
                    if(document.getElementById('l-text').value===`${words[attempt]} `){     
                        ps[attempt].classList.add('green')
                        correct++;
                    }else{
                        ps[attempt].classList.add('red')
                    }
                      
                    ps.forEach(element => {
                        element.classList.remove('focus')
                    });
                    attempt++;

                    if(attempt!==91){
                        ps[attempt].classList.add('focus')
                    }
                    
                    document.getElementById('f-text').reset()
                }
                if(attempt===91){
                    document.getElementById('l-text').remove()

                    let date2 = new Date()
                    let time_later = date2.getTime()
                    let play_time = (time_later-time_now)
                    let sg = Math.round(play_time/1000)
                    let average = Math.round((correct/91)*100)
                    setScore(play_time)
                    document.querySelector('.after-feed').classList.remove('hide')
                    document.querySelector('.time-text').innerHTML = `Precision ${average}% || ${sg} seconds`
                    if(play_time<=120000 && average>=70){
                        document.querySelector('.feed-text').innerHTML = 'Approved Test'
                    }else{
                        document.querySelector('.feed-text').innerHTML = 'Test failed. Time must be less than 2 minute and precision higher than 70%'
                    }

                    played=true;
                }
            })

        }
        
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
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
                <p>Write a series of words without making mistakes as fast as you can</p>
                <button onClick={handleReady} className='test-button'>Ready</button>
            </div>

            <div className='group-test two wrap-c hide'>

                <PopupCard game='Typing Test' score={score}/>

                <div className='go-back'>
                    <Link to='/exercises'><img src={back} alt='back' /></Link>
                </div>

                <div className='group-lyric container wrap-r'>
                    {
                        words.map(word =>{
                            key++;
                            return <p key={key}>{word}</p>
                        })
                    }
                </div>

                <form onSubmit={handleSubmit} id='f-text'>
                    <input id='l-text' type="text" autoComplete='off'/>
                </form>


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

export default TypingTest