import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import {motion} from "framer-motion"
const Hero = () => {
  const transition ={type: 'spring', duration : 3}
  return (
    <div className="hero">
      <cdiv className="blur hero-blur"></cdiv>
              <div className="left-h">
            <Header />
            <div className="the-best-ad">
              <motion.div initial={{left: '200px'}}
              whileInView = {{left: '8px'}}
              transition={{...transition, type: 'tween'}}
              >
                
              </motion.div>
              <span> la meilleure salle de la ville</span>
            </div>
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Shape </span>
                <span>your</span>
              </div>
              <div>
                <span>ideal body</span>
              </div>
              <div>
                <span>nous allons vous aider</span>
              </div>
            </div>

            <div className="figure">
              <div>
                <span>+140</span>
                <span>coachs experimentés</span>
                </div>
              <div>
                <span>+978</span>
                <span>membres nous ont rejoins </span>
                </div>
              <div>
                <span>+50</span>
                <span>programmes d'entrainements</span>
              </div>
            </div>

            <div className="hero-buttons">
              <buttons className="btn">Commencez</buttons>
              <buttons className="btn">Apprendre plus</buttons>
            </div>
        </div>
        <div className="right-h">
            <button className='btn'>Rejoignez nous</button>

            <motion.div 
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
            className="heart-rate">
              <img src={Heart} alt="coeur" />
              <span>battements de coeur</span>
              <span> 116 bpm</span>
            </motion.div>

            <img src={hero_image} alt="" className='hero-image' />
            <motion.img 
            initial={{right: '22rem'}}
            whileInView={{right:'30rem'}}
            transition={transition}
            src={hero_image_back} alt="" className='hero-image-back' />

            <motion.div 
            initial={{right: "45rem"}}
            whileInView={{right:"37rem"}}
            transition={transition}
            className="calories">
              <img src={Calories} alt="" />
              <div>
                <span>Calories brulées</span>
                <span>220 kcal</span>
              </div>
            </motion.div>
        
        </div>
    </div>
  )
}

export default Hero