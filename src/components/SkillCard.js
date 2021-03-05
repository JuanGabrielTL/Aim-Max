import React from 'react'

const SkillCard = ({name,img,num,check}) => {

    return (
        <div className={`skill-card wrap-c ${num} ${check}`}>
            <h4 className={`t ${num}`}>{name}</h4>
            <img className={`i ${num}`} src={img} alt='skill'/>
        </div>
    )
}

export default SkillCard