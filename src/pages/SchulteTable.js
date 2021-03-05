import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PopupCard from '../components/PopupCard';
import back from '../images/back.png'
import icon from '../images/iconBig9.png'

const SchulteTable = () => {
    const [score, setScore] = useState(0)
    const schulteNumber = ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','ELEVEN','TWELVE','THIRTEEN','FOURTEEN','FIFTEEN','SIXTEEN']

    const schulteBox = ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','ELEVEN','TWELVE','THIRTEEN','FOURTEEN','FIFTEEN','SIXTEEN']

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
    
    shuffle(schulteBox)

    let attempt = 0;
    let played = false;
    let time_now;
    
    const handleReady = ()=>{
        document.querySelector('.info-test').classList.add('hide')
        document.querySelector('.group-test').classList.remove('hide')

        document.querySelector('.schulte h3').innerHTML = schulteNumber[0]

        let date = new Date()
        time_now = date.getTime()
        
    }

    const handleSchulte = (e)=>{
        if(!played){
            if(attempt !== 15 ){
                if(e.target.classList.contains(schulteNumber[0])){ 
                    schulteNumber.shift();
                    document.querySelector('.schulte h3').innerHTML = schulteNumber[0]
                    attempt++;
                }
            }else{
                let date2 = new Date()
                let time_later = date2.getTime()
                let play_time = (time_later-time_now)
                setScore(play_time)
                document.querySelector('.after-feed').classList.remove('hide')
                document.querySelector('.time-text').innerHTML = `${play_time} ms`
                        
                if(play_time<=8880){
                    document.querySelector('.feed-text').innerHTML = 'Approved Test'
                }else{
                    document.querySelector('.feed-text').innerHTML = 'Test failed. Time must be less than 8800 ms'
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
                <p>Click as soon as you can when the shapes are the same</p>
                <button onClick={handleReady} className='test-button'>Ready</button>
            </div>

            <div className='group-test two wrap-c hide'>

                <PopupCard game='Schulte Table' score={score}/>

                <div className='go-back'>
                    <Link to='/exercises'><img src={back} alt='back' /></Link>
                </div>

                <div className='schulte'>
                    <h3>NaN</h3>
                </div>

                <div className='wrap-r'>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[0]}`}></div>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[1]}`}></div>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[2]}`}></div>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[3]}`}></div>
                </div>
                <div className='wrap-r'>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[4]}`}></div>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[5]}`}></div>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[6]}`}></div>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[7]}`}></div>
                </div>
                <div className='wrap-r'>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[8]}`}></div>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[9]}`}></div>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[10]}`}></div>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[11]}`}></div>
                </div>
                <div className='wrap-r'>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[12]}`}></div>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[13]}`}></div>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[14]}`}></div>
                    <div onClick={handleSchulte} className={`number-number ${schulteBox[15]}`}></div>
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

export default SchulteTable