import React from 'react'

const ExercisesCard = ({img,title,desc}) => {
    return (
        <div className='exercises-card wrap-c'>
            <img src={img} alt='icon' />
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}

export default ExercisesCard
