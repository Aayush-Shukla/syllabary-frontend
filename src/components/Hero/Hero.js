import React from 'react'
import './Hero.css'
import hero from '../../assets/images/hero.jpg'
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <div className="hero-title">
                <h1>Start learning from <br /> <span>the worlds best tutors</span></h1>
            </div>
            <div className="hero-desc">
                <span>Start your learning journey from the best tutor's around the world!</span>
            </div>
            <button>Learn Now</button>
        </div>
        {/* right component */}
        <div className="hero-right">
            <img src={hero} alt="" width={500} height={500} />
        </div>

    </div>
  )
}

export default Hero