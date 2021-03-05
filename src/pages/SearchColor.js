import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PopupCard from '../components/PopupCard';
import back from '../images/back.png'
import icon from '../images/iconBig4.png'

let attempt = 0;
let played = false;
let time_now;

const SearchColor = () => {
    const [score, setScore] = useState(0)
    const [colorLetter, setColorLetter] = useState(['BLACK','BLUE','GRAY','GREEN','ORANGE','PINK','PURPLE','RED','YELLOW'])
    

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

    shuffle(colorLetter)

    const handleReady = ()=>{
        document.querySelector('.info-test').classList.add('hide')
        document.querySelector('.group-test').classList.remove('hide')

        let date = new Date()
        time_now = date.getTime()

    }

    const handleNumber = (e)=>{

        if(!played){    

            if(e.target.classList.contains(document.querySelector('.number-letter h3').textContent)){

                attempt++;

                if(attempt === 5){
                    let date2 = new Date()
                    let time_later = date2.getTime()
                    let play_time = (time_later-time_now)
                    setScore(play_time)
                    document.querySelector('.after-feed').classList.remove('hide')
                    document.querySelector('.time-text').innerHTML = `${play_time} ms`
                    
                    if(play_time<=3550){
                        document.querySelector('.feed-text').innerHTML = 'Approved Test'
                    }else{
                        document.querySelector('.feed-text').innerHTML = 'Test failed. Time must be less than 3550 ms'
                    }
    
                    played = true;
                }else{
                    setColorLetter(['BLACK','BLUE','GRAY','GREEN','ORANGE','PINK','PURPLE','RED','YELLOW'])
                }
    
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
                <p>Click on the appropriate color as quickly as possible</p>
                <button onClick={handleReady} className='test-button'>Ready</button>
            </div>

            <div className='group-test two wrap-c hide'>

                <PopupCard game='Search Color' score={score}/>

                <div className='go-back'>
                    <Link to='/exercises'><img src={back} alt='back' /></Link>
                </div>

                <div className='group-number wrap-c'>                    

                    <div className='number-letter'>
                        <h3>{colorLetter[Math.floor(Math.random() * colorLetter.length)]}</h3>
                    </div>

                    <div className='wrap-r'>
                        <div onClick={handleNumber} className={`number-number ${colorLetter[0]}`}>
                            
                        </div>
                        <div onClick={handleNumber} className={`number-number ${colorLetter[1]}`}>
                            
                        </div>
                        <div onClick={handleNumber} className={`number-number ${colorLetter[2]}`}>
                            
                        </div>
                    </div>

                    <div className='wrap-r'>
                        <div onClick={handleNumber} className={`number-number ${colorLetter[3]}`}>
                            
                        </div>
                        <div onClick={handleNumber} className={`number-number ${colorLetter[4]}`}>
                            
                        </div>
                        <div onClick={handleNumber} className={`number-number ${colorLetter[5]}`}>
                            
                        </div>
                    </div>

                    <div className='wrap-r'>
                        <div onClick={handleNumber} className={`number-number ${colorLetter[6]}`}>
                            
                        </div>
                        <div onClick={handleNumber} className={`number-number ${colorLetter[7]}`}>
                            
                        </div>
                        <div onClick={handleNumber} className={`number-number ${colorLetter[8]}`}>
                            
                        </div>
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

export default SearchColor
