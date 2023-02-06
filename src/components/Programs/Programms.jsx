import React from 'react'
import './programms.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programms = () => {
  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className='stroke-text'>Explorez nos</span>
            <span>Programmes</span>
            <span>pour transformez votre corps</span>
        </div>
        <div className="program-categories">
            {programsData.map((program) =>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"> Rejoingnez maintenant</div> <img src={RightArrow} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programms