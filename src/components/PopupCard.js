import React from 'react'
import {saveScore} from '../fetch/fetch'

const PopupCard = (props) => {

    const handleCancel = (event = null)=>{
        if(event)event.preventDefault()
        document.querySelector('.popup').classList.remove('on')
        document.querySelector('#overlay').classList.remove('on')
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        let name = document.getElementById('popup-name').value,
        score = props.score,
        game = props.game
        saveScore(name, score, game)
        handleCancel()
    }

    return (
        <div className='popup'>
            <form onSubmit={handleSubmit}>
                <input id="popup-name" type="text" placeholder='Name' autoComplete='off'/>
                <div className='line-bt wrap-r'>
                    <button onClick={handleCancel} className='bt'>Cancel</button>
                    <input className='bt' type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    )
}

export default PopupCard
