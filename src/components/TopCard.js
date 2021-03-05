import React from 'react'

const TopCard = ({position,name,score}) => {
    return (
        <div className='top-card'>
            <img src={position} alt='position' />
            <h3>{name}</h3>
            <h4>{score}</h4>
        </div>
    )
}

export default TopCard
