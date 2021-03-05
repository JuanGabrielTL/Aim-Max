import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PopupCard from '../components/PopupCard';
import back from '../images/back.png'
import icon from '../images/iconBig10.png'

let match = 0;
let played = false;
let time_now;

const VisualMemory = () => {
    const [score, setScore] = useState(0)
    const [random, setRandom] = useState(['memory','memory','memory','memory','memory','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no'])
    
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
        let boxes = document.querySelectorAll('.box-memory')

        setTimeout(() => {
            boxes.forEach(element => {
                element.classList.add('back')
            });
        }, 1000);
    }

    name()

    const handleMemory = (e)=> {

        if(!played){
            if(e.target.classList.contains('memory')){
                e.target.classList.remove('back')
                match++;
    
                if(match===5 || match===10){
                    setRandom(['memory','memory','memory','memory','memory','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no','no'])
                }
    
                if(match===15){
                    let date2 = new Date()
                    let time_later = date2.getTime()
                    let play_time = (time_later-time_now)
                    setScore(play_time)
                    document.querySelector('.after-feed').classList.remove('hide')
                    document.querySelector('.time-text').innerHTML = `${play_time} ms`
        
                    if(play_time<=8075){
                        document.querySelector('.feed-text').innerHTML = 'Approved Test'
                    }else{
                        document.querySelector('.feed-text').innerHTML = 'Test failed. Time must be less than 8075 ms'
                    }
                    played=true;
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
                <p>Click on the orange boxes once they have been turned over</p>
                <button onClick={handleReady} className='test-button'>Ready</button>
            </div>

            <div className='group-test two wrap-c hide'>

                <PopupCard game='Visual Memory' score={score}/>

                <div className='go-back'>
                    <Link to='/exercises'><img src={back} alt='back' /></Link>
                </div>

                <div className='wrap-r'>
                    <div onClick={handleMemory} className={`box-memory ${random[0]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[1]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[2]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[3]}`}></div>  
                    <div onClick={handleMemory} className={`box-memory ${random[4]}`}></div>    
                </div>
                <div className='wrap-r'>
                    <div onClick={handleMemory} className={`box-memory ${random[5]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[6]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[7]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[8]}`}></div>  
                    <div onClick={handleMemory} className={`box-memory ${random[9]}`}></div>  
                </div>
                <div className='wrap-r'>
                    <div onClick={handleMemory} className={`box-memory ${random[10]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[11]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[12]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[13]}`}></div>  
                    <div onClick={handleMemory} className={`box-memory ${random[14]}`}></div>    
                </div>
                <div className='wrap-r'>
                    <div onClick={handleMemory} className={`box-memory ${random[15]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[16]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[17]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[18]}`}></div>  
                    <div onClick={handleMemory} className={`box-memory ${random[19]}`}></div>  
                </div>
                <div className='wrap-r'>
                    <div onClick={handleMemory} className={`box-memory ${random[20]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[21]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[22]}`}></div>
                    <div onClick={handleMemory} className={`box-memory ${random[23]}`}></div>  
                    <div onClick={handleMemory} className={`box-memory ${random[24]}`}></div>   
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

export default VisualMemory