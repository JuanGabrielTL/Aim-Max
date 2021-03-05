import React from 'react'

const KindCard = ({icon,title,desc,css}) => {
    return (
        <div className={`kind-card ${css} ${icon}`}>
            <div>
                <h4 className='i'>{title}</h4>
                <p className='t'>{desc}</p>    
            </div> 
        </div>
    )
}

export default KindCard
