import React from 'react'

const LeaderCard = ({position,name,score}) => {
    return (
        <div className='leader-card'>
            <img src={position} alt='position' />
            <h3>{name}</h3>
            <h4>{score}</h4>
        </div>
    )
}

export default LeaderCard
