import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header />
            <div className="the-best-ad">
              <div></div>
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
                <span>nous allons vous aider </span>
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

            <div className="heart-rate">
              <img src={Heart} alt="coeur" />
              <span>battements de coeur</span>
              <span> 116 bpm</span>
            </div>

            <img src={hero_image} alt="" className='hero-image' />
            <img src={hero_image_back} alt="" className='hero-image-back' />

            <div className="calories">
              <img src={Calories} alt="" />
              <div>
                <span>Calories brulées</span>
                <span>220 kcal</span>
              </div>
            </div>
        
        </div>
    </div>
  )
}

export default Hero