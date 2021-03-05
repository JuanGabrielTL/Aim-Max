import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import PopupCard from '../components/PopupCard';
import back from '../images/back.png'
import icon from '../images/iconBig7.png'

const shapeInitial = ['triangle','square','rectangle','circle','rhomb','parallelogram','trapeze']

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

shuffle(shapeInitial)

const FigureChange = () => {
    const [score, setScore] = useState(0)
    const [shape, setShape] = useState(['triangle','square','rectangle','circle','rhomb','parallelogram','trapeze'])

    const handleReady = ()=>{
        document.querySelector('.info-test').classList.add('hide')
        document.querySelector('.group-test').classList.remove('hide')

        name()
    }

    function name(params) {

        const A = document.getElementById('static')
        const B = document.getElementById('change')

        if(A.className === B.className){
           
            let date = new Date()
            let time_now = date.getTime()

            document.querySelector('.group-test').addEventListener('click',()=>{
                                    
                let date2 = new Date()
                let time_later = date2.getTime()
                let play_time = (time_later-time_now)
                setScore(play_time)
                document.querySelector('.after-feed').classList.remove('hide')
                document.querySelector('.time-text').innerHTML = `${play_time} ms`
                            
                if(play_time<=520){
                    document.querySelector('.feed-text').innerHTML = 'Approved Test'
                }else{
                    document.querySelector('.feed-text').innerHTML = 'Test failed. Time must be less than 520 ms'
                }

            }, {once : true})

        }else{
            setTimeout(() => {
                setShape(['triangle','square','rectangle','circle','rhomb','parallelogram','trapeze'])
                name()
            }, 1000);
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

                <PopupCard game='Shape Change' score={score}/>

                <div className='go-back'>
                    <Link to='/exercises'><img src={back} alt='back' /></Link>
                </div>

                <div className='group-shapes wrap-r'>
                    <div id='static' className={`shape ${shapeInitial[0]}`}></div>
                    <div id='change' className={`shape ${shape[Math.floor(Math.random() * shape.length)]}`}></div>
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

export default FigureChange