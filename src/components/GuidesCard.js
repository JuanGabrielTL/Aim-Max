import React from 'react'

const GuidesCard = ({mini,border,num,color}) => {

    const handleOrange = (e)=>{
        const allCard = document.querySelectorAll('.guides-card')

        allCard.forEach(element => {
            element.classList.remove('check')
            element.classList.remove('on')
            e.target.classList.add('check')
            e.target.classList.add('on')
        });
    }

    return (
        <div onClick={handleOrange} className={`guides-card ${mini} ${border} ${num} ${color}`}>
            
        </div>
    )
}

export default GuidesCard
